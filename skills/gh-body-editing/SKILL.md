---
name: gh-body-editing
description: Edit a GitHub issue or PR body with gh. Use when changing an existing issue or PR description.
---

1. Create a fresh temp file with `mktemp` and reuse its printed path in every later step.
2. Fetch the current body into it: `gh <issue|pr> view <n> --json body --jq '.body' > <path>`
3. Edit the file as needed.
4. Push the edited body: `gh <issue|pr> edit <n> --body-file <path>`
5. Confirm the edit landed: `gh <issue|pr> view <n> --json body --jq '.body'` matches the file.
