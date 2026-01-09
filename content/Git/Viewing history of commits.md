---
title: How to view commit history
description: How one can view commit history
date: 09 January 2026
---

Once you are in a git repository, to see the commit history, the most basic and powerful tool is to use 
```
git log
``` 

This opens a pager, listing all the git commits from latest to oldest.

## Some most helpful options

1. `-<number>`: This will show `n` number of patches from the first patch. Example `git log -2` will show latest 2 commits. 
2. `--since=<date>`: Will show commits after `<date>`. Example `git log --since="3 years 2 weeks 1 day 2 minutes"`
3. `--until=<date>`: Shows all commit before `<date>`.
4. `-p` or `--patch`: It shows the difference (called the patch output) introduced in each commit.
5. `--stat`: Gives abbreviated stats for each commit. These include file changed, insertions, deletions along with filenames
6. `--shortstat`: Displays only the file changed,insertions and deletions from the `--stat` command excluding stats per file
7. `--name-only`: Displays the files modified in each commit.
8. `--abbrev-commit`: Shows only a few characters of `SHA-1` checksum instead of all 40.
9. `--relative-date`: Display the date in relative format like "2 days ago" instead of full date format
10. `--graph`: Displays a graph of the branch and merge history along with the log output
11. `--pretty`: Shows output in alternate format, these can be `oneline`, `short`, `full`, `fuller` and `format:"<your own format>"`
12. `--oneline`: Shorthand for `--pretty=online --abbrev-commit`

## Formatting the output
`--pretty=[formatter]`: Used to format the outputs of `git log`. Some of the built in formatters are:
    - `--pretty=oneline`: Prints each commit in oneline
    - `--pretty=short`: Shows commit hash, author, commit message
    - `--pretty=full`: Additionally shows commiter
    - `--pretty=fuller`: Additionally shows author date and commit date.

You can also create your own formatter using `--pretty:format:"<space separated format specifiers>"`

### Some usefule specifiers for git log are:

| Specifier | Displays    |
| ----------| ------------|
| %H        | Commit hash |
| %h        | Abbreviated commit hash |
| %T        | Tree hash |
| %t        | Abbreviated tree hash |
| %P        | Parent hash |
| %p        | Abbreviated parent hash |
| %an       | Author name |
| %ae       | Author email|
| %ad       | Author date, format specified using `--date=<option>` |
| %ar       | Author date in relative format |
| %cn       | Commiter name  |
| %ce       | Commiter email |
| %cd       | Commiter date, format specified using `--date=<option>`   |
| %cr       | Commiter date in relative format | 
| %s        | Commit message, also called subject |

More can be found [here](https://git-scm.com/docs/pretty-formats)

> **Note:** The author is the person who originally wrote the work, whereas the committer is the person who last applied the work. So, if you send in a patch to a project and one of the core members applies the patch, both of you get credit — you as the author, and the core member as the committer.

## Searching commit history
You can filter `git log` using various filters like
1. `--since=<date>,--after=<date>`: Limit the commits to those made after the specified date.
2. `--until=<date>`: Limit the commits to those made before the specified date.
3. `--author="<name>"`: Only show commits in which the author entry matches the specified `<name>`.
4. `--grep="<string>"`: Only show commits with a commit message containing the `<string>`.
5. `-S "<string>"`: Also referred to as Git's **pickaxe** option. `git log` will only display the commits in which `function_name` was changed
6. `-- <path to directory>` (Yes whitespace is required): This will filter the log to list commits in which the files changed were in the directory you specified.


> **Note**`:--author` and `--grep` can be used multiple times and the log will output commits which match any one. But this can be changed by using `--all-match` option which will just show commits that match all `--grep` patterns