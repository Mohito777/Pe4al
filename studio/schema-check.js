// Run this file like this:
// npx sanity exec schema-check.js --mock-browser-env -- --strict
import schema from './schemas/schema';

let hasErrors = false;
let hasWarnings = false;

for (const item of schema._validation) {
  const path = item.path.map((segment) => segment.name).join(' → ');
  console.log(`${path}:`);

  for (const problem of item.problems) {
    if (problem.severity === 'error') {
      hasErrors = true;
      console.error(`  - [error] ${problem.message}`);
    } else if (problem.severity === 'warning') {
      hasWarnings = true;
      console.warn(`  - [warning] ${problem.message}`);
    }
  }

  console.warn('');
}

if (hasErrors) {
  process.exit(1);
}

if (hasWarnings && process.argv.includes('--strict')) {
  process.exit(2);
}
