#!/usr/bin/env bun
// Fetches the latest gitmoji definitions and regenerates
// skills/gitmoji/references/gitmojis.md, then appends the custom gitmoji below.
// Usage: bun run update-gitmojis

import { writeFile } from 'node:fs/promises';
import { relative } from 'node:path';

const SOURCE_URL =
  'https://raw.githubusercontent.com/carloscuesta/gitmoji/master/packages/gitmojis/src/gitmojis.json';

const OUTPUT = new URL('../skills/gitmoji/references/gitmojis.md', import.meta.url).pathname;
const OUTPUT_REL = relative(process.cwd(), OUTPUT);

// Custom gitmoji not in upstream, appended after the upstream list.
const CUSTOM = [
  { emoji: '🤖', description: 'Add or update agent instructions, skills or config.' },
];

console.log(`Fetching gitmojis from ${SOURCE_URL}`);
const response = await fetch(SOURCE_URL);
if (!response.ok) {
  throw new Error(`Failed to fetch ${SOURCE_URL}: ${response.status} ${response.statusText}`);
}
const json = (await response.json()) as { gitmojis: { emoji: string; description: string }[] };

const header = `# Gitmoji Reference

Full list of all gitmoji with emoji character and description.

| Emoji | Description |
|-------|-------------|
`;

const gitmojis = [...json.gitmojis, ...CUSTOM];
const rows = gitmojis.map((g) => `| ${g.emoji} | ${g.description} |`).join('\n');

console.log(`Generating ${OUTPUT_REL}...`);
await writeFile(OUTPUT, header + rows + '\n', 'utf8');
console.log(`Done. ${OUTPUT_REL} updated with ${gitmojis.length} gitmojis.`);
