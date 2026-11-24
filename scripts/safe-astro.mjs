/**
 * Windows blokuje node_modules na Pulpicie (EPERM).
 * Sync → build/dev w C:\\Users\\jakub\\dev\\fenix-cars → dist wraca na Pulpit.
 */
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const desk = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const good = 'C:\\Users\\jakub\\dev\\fenix-cars';
const action = process.argv[2] || 'build';

function run(command, args, cwd, useShell = false) {
  const result = spawnSync(command, args, {
    cwd,
    stdio: 'inherit',
    shell: useShell,
    env: process.env,
    windowsHide: true,
  });
  if (result.error) {
    console.error(result.error);
    return 1;
  }
  return result.status ?? 1;
}

const syncCode = run('robocopy.exe', [
  desk,
  good,
  '/E',
  '/XD',
  'node_modules',
  'dist',
  '.astro',
  '.git',
  '.deps',
  'node_modules_new',
  'node_modules_BAD',
  '/NFL',
  '/NDL',
  '/NJH',
  '/NJS',
  '/NP',
  '/NC',
  '/NS',
], desk);
if (syncCode >= 8) process.exit(syncCode);

const pkgPath = path.join(good, 'package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
pkg.scripts = {
  dev: 'astro dev',
  build: 'astro build',
  preview: 'astro preview',
  astro: 'astro',
};
fs.writeFileSync(pkgPath, `${JSON.stringify(pkg, null, 2)}\n`);

const status = run('npm.cmd', ['run', action], good, true);
if (status !== 0) process.exit(status);

if (action === 'build') {
  const distCode = run('robocopy.exe', [
    path.join(good, 'dist'),
    path.join(desk, 'dist'),
    '/E',
    '/MIR',
    '/NFL',
    '/NDL',
    '/NJH',
    '/NJS',
    '/NP',
    '/NC',
    '/NS',
  ], desk);
  if (distCode >= 8) process.exit(distCode);
}

process.exit(0);
