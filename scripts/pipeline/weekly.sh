#!/usr/bin/env bash
# Incremental update of every published format (see UPDATING.md).
#   bash scripts/pipeline/weekly.sh refresh   # Scryfall + new mtgtop8 results + candidates + what is pending
#   bash scripts/pipeline/weekly.sh build     # after the editorial pass: check, build, prices, validate
#   bash scripts/pipeline/weekly.sh prices    # current card prices only (Scryfall bulk, refreshed daily)
set -euo pipefail
cd "$(dirname "$0")/../.."
FORMATS="${MTG_FORMATS:-standard pioneer modern legacy vintage pauper premodern limited}"
P=scripts/pipeline

case "${1:-}" in
  refresh)
    python3 $P/fetch_scryfall.py
    python3 $P/prints.py
    year=$(date +%Y)
    first=$year
    # results keep arriving on mtgtop8 for weeks: refresh last year too in January and February
    [ "$(date +%m)" -le 2 ] && first=$((year - 1))
    for f in $FORMATS; do
      echo "=== $f"
      if [ "$f" = limited ]; then
        # 17Lands public dumps: changed dumps and new sets; then what lacks an editorial entry
        python3 $P/limited/refresh.py
        python3 $P/limited/build_limited.py --check | grep -vE '^[a-z0-9]+ [0-9]+ decks' || true
        continue
      fi
      MTG_FORMAT=$f python3 $P/scrape_search.py "$first" "$year" --refresh
      MTG_FORMAT=$f python3 $P/cluster.py > /dev/null
      MTG_FORMAT=$f python3 $P/pending.py
    done
    ;;
  build)
    status=0
    for f in $FORMATS; do
      echo "=== $f"
      if [ "$f" = limited ]; then
        python3 $P/limited/build_limited.py --check > .pipeline/build-limited.log || { grep -E 'error|^ -' .pipeline/build-limited.log; status=1; }
        python3 $P/limited/build_limited.py > /dev/null
        continue
      fi
      MTG_FORMAT=$f python3 -c "import sys; sys.path.insert(0, '$P'); from common import SEASONS; print(' '.join(s[0] for s in SEASONS[-2:]))" > .pipeline/recent
      for s in $(cat .pipeline/recent); do
        MTG_FORMAT=$f python3 $P/check_editorial.py "$s" || status=1
      done
      # lists of the new results, for the deck pages' "All decklists" tab (older ones are published)
      MTG_FORMAT=$f python3 $P/fetch_result_lists.py $(cat .pipeline/recent) | tail -1
      MTG_FORMAT=$f python3 $P/build.py | tee .pipeline/build-$f.log | grep -E 'WARN|SKIP|missing \[[^]]' || true
    done
    # current card prices of every built format (Scryfall bulk downloaded by refresh)
    python3 $P/prices.py > .pipeline/prices.log || { cat .pipeline/prices.log; status=1; }
    npm run --silent validate:content || status=1
    npm run --silent typecheck || status=1
    npm run --silent build > .pipeline/vite.log 2>&1 || { tail -20 .pipeline/vite.log; status=1; }
    exit $status
    ;;
  prices)
    python3 $P/fetch_scryfall.py
    python3 $P/prices.py
    npm run --silent validate:content
    ;;
  *)
    echo "usage: $0 refresh|build|prices" >&2
    exit 2
    ;;
esac
