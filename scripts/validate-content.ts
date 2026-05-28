import { getAllEntries } from '../src/data/years'
import { validateEntry } from '../src/lib/contentValidation'

const entries = getAllEntries()
let totalErrors = 0

console.log(`Validating ${entries.length} entries...\n`)

for (const entry of entries) {
  const errors = validateEntry(entry)
  if (errors.length > 0) {
    console.log(`[FAIL] ${entry.year} ${entry.format}`)
    for (const err of errors) {
      console.log(`  - ${err.path}: ${err.message}`)
    }
    totalErrors += errors.length
  } else {
    console.log(`[OK]   ${entry.year} ${entry.format}`)
  }
}

console.log(`\n${entries.length} entries checked, ${totalErrors} error(s) found.`)

if (totalErrors > 0) {
  process.exit(1)
}
