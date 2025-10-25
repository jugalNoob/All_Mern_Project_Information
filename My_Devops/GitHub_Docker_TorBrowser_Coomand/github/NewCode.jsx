
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

## 1. Introduction

> **Git** is a free and open-source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

**Types of Version Control Systems:**
- Local Version Control  
- Centralized Version Control  
- Distributed Version Control → (e.g., Git / GitHub)

---

## 2. Setup & Configuration

```bash
# Check current path
pwd

# Configure your identity
git config --global user.name "Your Name"
git config --global user.email "your_email@example.com"

# View all Git configs
git config --list

# Initialize repository
git init

# Create README file (example)
echo "# MyProject" >> README.md



3. Core Commands
git status                     # Show working tree status
git add .                      # Stage all changes
git add file.py                # Stage a single file
git commit -m "Initial commit" # Commit staged changes
git log                        # Show commit history
git diff                       # View unstaged changes
git diff --staged              # View staged changes


4. File Lifecycle

| State     | Command Example       | Description                               |
| --------- | --------------------- | ----------------------------------------- |
| Untracked | `git status`          | Newly created file                        |
| Staged    | `git add file.py`     | File ready to be committed                |
| Committed | `git commit -m "msg"` | Saved to local repository                 |
| Modified  | `echo hi >> file.py`  | File changed after commit                 |
| Restored  | `git restore file.py` | Discard changes and revert to last commit |


00::::::::::::::::: ----------------->>>File System Check Remove Rename List of file and folder

# Remove file
git rm file.py

# Rename / move file
git mv old.py new.py

$ check files 
git ls-tree main

git ls-tree main src


5. Branching & Merging -------------------------------->>>

# Create and switch to new branch
git checkout -b feature/login
# or modern:
git switch -c feature/login

# List branches
git branch

# Switch branch
git checkout main
# or
git switch main

# Merge feature branch into main
git checkout main
git merge feature/login

# Delete local branch
git branch -d feature/login


Merge Conflicts:
When merging, if two branches change the same lines, you'll see conflict markers:

<<<<<<< HEAD
your version
=======
incoming version
>>>>>>> feature/login


Resolve manually, then:

git add file
git commit

6. Remote Repositories ::::::::::::::::::::::::::--------------------->>

# Add remote (GitHub)
git remote add origin https://github.com/user/repo.git

# Verify
git remote -v

# Push to remote
git push -u origin main

# Pull updates from remote
git pull

# Fetch without merging
git fetch



Clone an existing repository:

git clone https://github.com/user/repo.git
git clone https://github.com/user/repo.git my-folder


7. Undoing & Restoring
# Undo unstaged changes (working tree)
git restore file.py
git restore .

# Unstage file
git restore --staged file.py

# Uncommit but keep changes
git reset --soft HEAD~1

# Uncommit and discard changes (⚠️ dangerous)
git reset --hard HEAD~1

# Revert a specific commit (safe for shared branches)
git revert <commit-hash>

8. Logging & History
git log                          # full history
git log --oneline                # short hashes & messages
git log --oneline --graph --decorate --all

git log -p -2                    # last 2 commits with diff
git log --stat                   # summary of file changes
git show <hash>                  # details for a single commit
git blame file.py                # who changed each line

9. Advanced Git
🔸 Stash
git stash push -m "WIP: login"
git stash list
git stash show -p stash@{0}
git stash pop
git stash branch recover stash@{0}

🔸 Rebase
git pull --rebase           # linear history
git rebase -i HEAD~5        # interactive rebase (squash/reorder)

🔸 Cherry-pick
git cherry-pick <commit>
git cherry-pick -x <commit> # include reference

🔸 Tags
git tag -a v1.0 -m "Release 1.0"
git push origin --tags

🔸 Bisect
git bisect start
git bisect bad
git bisect good <good-hash>
# test each commit, then:
git bisect good|bad
git bisect reset

🔸 Reflog (recover lost commits)
git reflog
git checkout -b recover <reflog-hash>

🔸 Clean untracked files
git clean -n     # dry run
git clean -fd    # delete untracked files and folders

10. SSH Key Setup
# Generate key
ssh-keygen -t ed25519 -C "your_email@example.com"
# or fallback: ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

# Start ssh-agent & add key
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# Copy the public key
cat ~/.ssh/id_ed25519.pub
# Add it to GitHub: Settings → SSH and GPG keys

# Test
ssh -T git@github.com

11. Best Practices

✅ Commit Often: Small, focused commits with meaningful messages.
✅ Use Branches: Keep main clean. Use feature branches.
✅ Avoid force-push on shared branches: Use git push --force-with-lease if needed.
✅ Use .gitignore: Avoid committing secrets and unnecessary files.
✅ Use git pull --rebase: Keeps history clean (team preference).
✅ Tag releases: For stable snapshots.
✅ Use descriptive branch names: e.g., feature/login-page, bugfix/payment-issue.

12. Common Workflows
🚀 Initializing & pushing a new project
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/user/repo.git
git push -u origin main

🌿 Feature Branch Workflow
git switch -c feature/new-feature
# work & commit
git push -u origin feature/new-feature
# open a Pull Request → code review → merge

🩹 Hotfix
git switch main
git pull
git switch -c hotfix/critical-issue
# fix, commit, push, PR

🏁 Conclusion

This guide is intended as a team onboarding & quick reference for using Git confidently in both small and large projects.

It includes the most frequently used commands, safe undo operations, advanced workflows, and best practices followed by modern dev teams.