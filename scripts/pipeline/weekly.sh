#!/usr/bin/env bash
# Incremental update of every published format (see UPDATING.md).
#   bash scripts/pipeline/weekly.sh refresh   # Scryfall + new mtgtop8 results + candidates + what is pending
#   bash scripts/pipeline/weekly.sh build     # after the editorial pass: check, build, validate
set -euo pipefail
cd "$(dirname "$0")/../.."
FORMATS="${MTG_FORMATS:-standard modern premodern}"
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
      MTG_FORMAT=$f python3 $P/scrape_search.py "$first" "$year" --refresh
      MTG_FORMAT=$f python3 $P/cluster.py > /dev/null
      MTG_FORMAT=$f python3 $P/pending.py
    done
    ;;
  build)
    status=0
    for f in $FORMATS; do
      echo "=== $f"
      MTG_FORMAT=$f python3 -c "import sys; sys.path.insert(0, '$P'); from common import SEASONS; print(' '.join(s[0] for s in SEASONS[-2:]))" > .pipeline/recent
      for s in $(cat .pipeline/recent); do
        MTG_FORMAT=$f python3 $P/check_editorial.py "$s" || status=1
      done
      MTG_FORMAT=$f python3 $P/build.py | tee .pipeline/build-$f.log | grep -E 'WARN|SKIP|missing \[[^]]' || true
    done
    npm run --silent validate:content || status=1
    npm run --silent typecheck || status=1
    npm run --silent build > .pipeline/vite.log 2>&1 || { tail -20 .pipeline/vite.log; status=1; }
    exit $status
    ;;
  *)
    echo "usage: $0 refresh|build" >&2
    exit 2
    ;;
esac
