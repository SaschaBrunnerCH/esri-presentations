import { spawnSync } from 'node:child_process';
import { repositoryRoot } from './presentations.mjs';

// One list for a local review, PR validation and the deployment build.
for (const check of ['lint', 'check:links', 'build']) {
  const result = spawnSync('pnpm', ['run', check], {
    cwd: repositoryRoot,
    stdio: 'inherit',
  });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
}
