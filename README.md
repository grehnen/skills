# Skills

My agent skills for everyday git and GitHub work. Each skill is a small `SKILL.md` that works with any agent that supports skills.

## Installation

With the [skills CLI](https://github.com/vercel-labs/skills):

```bash
bunx skills add -g grehnen/skills
```

Or as a Claude Code plugin:

```
/plugin marketplace add grehnen/skills
/plugin install grehnen-skills@grehnen
```

## Reference

- **[gitmoji](./skills/gitmoji/SKILL.md)**: Write a single commit message prefixed with the most specific gitmoji.
- **[gh-body-editing](./skills/gh-body-editing/SKILL.md)**: Edit a multi-line GitHub issue or PR body through a temp file and `--body-file`.

## Updating the gitmoji list

The gitmoji reference is generated from the [upstream gitmoji list](https://github.com/carloscuesta/gitmoji), plus a custom 🤖 entry for agent tooling. To regenerate it:

```bash
bun run update-gitmojis
```

A weekly workflow runs the same script and opens a PR when the list changes.
