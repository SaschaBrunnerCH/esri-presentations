import { spawnSync } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { presentations, repositoryRoot } from './presentations.mjs';

// Slidev's default PDF mode prints the final click state once per visible slide.
for (const presentation of presentations) {
  const directory = resolve(repositoryRoot, presentation.path);
  mkdirSync(resolve(directory, 'public'), { recursive: true });
  const result = spawnSync(
    'pnpm',
    [
      'run',
      'export',
      '--output',
      `public/${presentation.pdf}`,
      // Slidev's per-slide PDF export currently cannot also create an outline.
      ...(presentation.exportPerSlide ? ['--per-slide'] : ['--with-toc']),
      '--wait-until',
      'load',
      '--wait',
      presentation.exportPerSlide ? '2000' : '15000',
      '--timeout',
      '120000',
    ],
    { cwd: directory, stdio: 'inherit' },
  );
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
}
