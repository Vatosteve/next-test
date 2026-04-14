---
allowed-tools: Bash, Read, Glob, Grep
argument-hint: [--draft] [--base <branch>]
description: Create a pull request from the current branch
---

## Create Pull Request

**Arguments**: $ARGUMENTS

### Step 1 - Make sure main is up to date

Run these in sequence:

- `git fetch origin main:main`
- `git rebase main`

If there are conflict errors, warn the user and ask if they should attempt to fix

### Step 2 — Gather branch context

Run these in parallel:

- `git status` — check for uncommitted changes
- `git branch --show-current` — get current branch name
- `git log main...HEAD --oneline` — list commits on this branch
- `git diff main...HEAD --stat` — summarize changed files

If there are uncommitted changes, warn the user and stop.
If the current branch is `main`, warn the user and stop.

### Step 3 — Understand the changes

Read the full diff: `git diff main...HEAD`

Review each changed file to understand:

- What was added or removed
- The purpose of the changes
- Any linked issues (look for `#123` patterns in commits or code)

### Step 4 — Draft PR title and body

**Title**: One concise sentence, under 70 characters. Follow Conventional Commits style (e.g. `feat:`, `fix:`, `chore:`).

**Body** (use this template):

```
## Summary
- <bullet points describing what changed and why>

## Test plan
- [ ] <what to verify manually or via tests>

🤖 Generated with [Claude Code](https://claude.ai/claude-code)
```

### Step 5 — Push and create PR

1. Push the branch: `git push -u origin HEAD`
2. Build the `gh pr create` command:
   - If `--draft` in arguments: add `--draft`
   - If `--base <branch>` in arguments: add `--base <branch>`, otherwise use `main`
3. Run:

```
gh pr create --title "<title>" --body "$(cat <<'EOF'
<body>
EOF
)"
```

### Step 6 — Report

Print the PR URL returned by `gh pr create`.
