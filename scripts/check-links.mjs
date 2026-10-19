import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { repositoryRoot } from './presentations.mjs';

// Check local Markdown link/image targets, including new files before staging.
// Fenced examples, external URLs and heading anchors are outside this check.
const files = execFileSync(
  'git',
  ['ls-files', '--cached', '--others', '--exclude-standard', '-z', '*.md'],
  { cwd: repositoryRoot, encoding: 'utf8' },
)
  .split('\0')
  .filter(Boolean);
const failures = [];
let checked = 0;
for (const file of new Set(files)) {
  const text = readFileSync(resolve(repositoryRoot, file), 'utf8').replace(
    /^(`{3,}|~{3,})[^\n]*\n[\s\S]*?^\1[^\n]*$/gm,
    '',
  );
  const targets = [
    ...text.matchAll(/\]\(\s*<?([^\s)>]+)>?(?:\s+["'][^\n]*?["'])?\s*\)/g),
    ...text.matchAll(/^\s*\[[^\]]+\]:\s*<?([^\s>]+)>?/gm),
  ];
  for (const [, target] of targets) {
    if (/^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(target)) continue;
    const path = decodeURIComponent(target.split(/[?#]/)[0]);
    if (!path) continue;
    const absolute = path.startsWith('/')
      ? resolve(repositoryRoot, dirname(file), 'public', path.slice(1))
      : resolve(repositoryRoot, dirname(file), path);
    checked++;
    if (!existsSync(absolute)) failures.push(`${file}: ${target}`);
  }
}
if (failures.length) {
  console.error(`Missing local link targets:\n${failures.join('\n')}`);
  process.exitCode = 1;
} else {
  console.log(`Checked ${checked} local Markdown link targets.`);
}
