import { spawnSync } from 'node:child_process';
import { copyFileSync, cpSync, mkdirSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';
import { presentations, repositoryRoot } from './presentations.mjs';

// Empty means a domain root; Pages supplies /<repository>. Both use nested decks.
const base = (process.env.PAGES_BASE_PATH ?? '').replace(/\/$/, '');
if (base && (!base.startsWith('/') || base.includes('..'))) {
  throw new Error('PAGES_BASE_PATH must be an absolute URL path.');
}
const output = resolve(repositoryRoot, 'dist');
rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });

for (const presentation of presentations) {
  const result = spawnSync(
    'pnpm',
    [
      'run',
      'build',
      '--base',
      `${base}/${presentation.path}/`,
      '--router-mode',
      'hash',
      '--out',
      resolve(output, presentation.path),
    ],
    { cwd: resolve(repositoryRoot, presentation.path), stdio: 'inherit' },
  );
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
}
copyFileSync(
  resolve(repositoryRoot, 'site/index.html'),
  resolve(output, 'index.html'),
);
cpSync(resolve(repositoryRoot, 'site/assets'), resolve(output, 'assets'), {
  recursive: true,
});
