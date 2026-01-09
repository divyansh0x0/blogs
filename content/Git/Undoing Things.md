---
title: How to undo things in GIT
description: Showcases methods on how to undo changes in GIT
---

One of the common undos takes place when you commit too early and possibly forget to add some files, or you mess up your commit message. If you want to redo that commit, make the additional changes you forgot, stage them, and commit again using the `--amend` option:
```bash
git commit --amend
```
This will overwrite your previous commit, with an updated message (if you update it). 

---
> **Note:**  Amending a commit doesn't really “fix” it—it replaces it with a new version. The old commit disappears from history as if it never happened. This is useful for making small changes to your most recent commit (like adding a missing file or fixing a typo) without creating extra “oops” commits and cluttering your history.

---

> **Another Note**: Only amend commits that are still local and have not been pushed somewhere. Amending previously pushed commits and force pushing the branch will cause problems for your collaborators.
---