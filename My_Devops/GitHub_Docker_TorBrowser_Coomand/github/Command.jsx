# 🧠 Git 2.0 — Complete Command Guide

A complete, team-ready Git reference.  
Covers setup, basic usage, branching, merging, undoing, remote workflows, advanced operations, and best practices.

---

## 📌 Table of Contents
- [1. Introduction](#1-introduction)
- [2. Setup & Configuration](#2-setup--configuration)
- [3. Core Commands](#3-core-commands)
- [4. File Lifecycle](#4-file-lifecycle)
- [5. Branching & Merging](#5-branching--merging)
- [6. Remote Repositories](#6-remote-repositories)
- [7. Undoing & Restoring](#7-undoing--restoring)
- [8. Logging & History](#8-logging--history)
- [9. Advanced Git](#9-advanced-git)
- [10. SSH Key Setup](#10-ssh-key-setup)
- [11. Best Practices](#11-best-practices)
- [12. Common Workflows](#12-common-workflows)
1


️⃣ Git Configuration and Setup
Check Git config
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git config --list

# Sync with remote
git fetch origin
git pull origin main
git push origin feature



📝 Quick Correct Flow Recap --:: Importtant 
git branch
git checkout -b jugal       # create & switch to new branch
git switch master -->only switch 
git add simple/app.css
git 
git commit -m "newbranch"
git push origin jugal
git branch -d jugal -->delete branch 
git push origin -delete jugal--> delete barnch in my remote 



00::: Git Config and Git Remote 

git Config 

git remote 



7️⃣ Inspect Repository Status
git status         # check modified/untracked files
git log            # view commit history
git log --oneline  # short commit history
git diff           # see unstaged changes
git diff --staged  # see staged changes


2️⃣ Branch Management
List branches  ------------------->>
git branch        # local branches
git branch -r     # remote branches
git branch -a     # all branches

Create & switch to new branch  ----------------->
git checkout -b jugal   # old way
git switch -c jugal     # new recommended way

Switch branches ----------------->
git switch main   # switch to main branch
git checkout main # old way

Delete branch -------------->
git branch -d jugal       # delete local branch safely
git branch -D jugal       # force delete local branch
git push origin --delete jugal  # delete remote branch




3️⃣ Add, Commit, Push
Stage files
git add simple/app.css
git add .           # stage all changes
git add -u          # stage modified/deleted files only

Commit changes
git commit -m "Add app.css"

Push branch to remote
git push origin jugal
git push -u origin jugal   # set upstream if first push




4️⃣ Syncing with Remote
Fetch changes from remote
git fetch origin

Pull latest changes
git pull origin main

Push after syncing
git push origin feature



5️⃣ Inspecting Git Objects
List files in commit/tree
git ls-tree HEAD   # shows files in current commit
git ls-tree -r HEAD # recursive, all files in repo
 git ls-tree HEAD:simple -->if folder


6️⃣ Undo, Reset, and Stash
Stash changes
git stash          # stash uncommitted changes
git stash list     # show all stashes
git stash apply    # re-apply last stash
git stash pop      # apply and remove from stash list
git stash drop     # remove specific stash



::::::::: Important 
Undo staged file
git reset HEAD simple/app.css   # unstage a file



8️⃣ Advanced / Useful Commands

Show branches with last commit:

git branch -v


View remote info:

git remote show origin


Track a remote branch locally:

git checkout --track origin/jugal


Rename current branch:

git branch -m oldname newname


Squash commits interactively:

git rebase -i HEAD~3


::::::::: Important 
Undo staged file
git reset HEAD simple/app.css   # unstage a file

Discard local changes
git checkout -- simple/app.css  # revert changes in a file





1️⃣ Check Git configuration
View all configs
git config --list


Shows all Git settings from system, global, and local levels.

View a specific config
git config user.name
git config user.email

2️⃣ Set Git configuration
Global (applies to all repositories for the current user)
git config --global user.name "Your Name"
git config --global user.email "you@example.com"

Local (applies only to current repository)
git config --local user.name "Repo Specific Name"
git config --local user.email "repo@example.com"






