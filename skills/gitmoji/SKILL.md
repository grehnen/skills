---
name: gitmoji
description: Gitmoji commit messages. Use when committing or writing a commit message.
argument-hint: "[staged|chat|all|split]"
---

# Gitmoji Commit Messages

Write one commit message per commit: a single subject line summarizing all its changes together, prefixed with the most SPECIFIC emoji that represents the overall change.

Format: `<emoji> <imperative summary>` (≤72 chars). Use the emoji character itself (✨), as listed in the reference. Add a body only when the subject cannot carry a necessary detail.

Emoji definitions: [./references/gitmojis.md](./references/gitmojis.md)

When the user asked you to commit, run `git commit` with the message. Otherwise, output the message in a fenced code block.

## Scope

When invoked without a shortcommand, cover the staged changes; when nothing is staged, cover the files you changed in this session.

## Shortcommands

- `/gitmoji`: write a commit message for all staged changes; when nothing is staged, behave as `/gitmoji all`.
- `/gitmoji staged`: write a commit message for all staged changes.
- `/gitmoji chat`: write a commit message covering only the files you changed in this session; leave other working-tree changes out.
- `/gitmoji all`: write a commit message for all staged and unstaged changes.
- `/gitmoji split`: help the user split all the current changes into distinct commits, each with its own gitmoji message.
