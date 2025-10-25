1. How will you resolve conflict in Git?


Conflicts occur whenever there are multiple people working on the same file across multiple branches. In such cases, git won't be able to resolve it automatically as it is not capable of deciding what changes has to get the precedence.
Following are the steps are done in order to resolve git conflicts:
1. Identify the files that have conflicts.
2. Discuss with members who have worked on the file and ensure that the required changes are done in the file.
3. Add these files to the staged section by using the git add command.
4. Commit these changes using the git commit command.
5. Finally, push the changes to the branch using the git



2. What command helps us know the list of branches merged to master?

git branch --merged helps to get the list of the branches that have been merged into the current branch.
Note: git branch --no-merged lists the branches that have not been merged to the current branch


19. Can you tell the difference between Git and GitHub?

Git	GitHub
This is a distributed version control system installed on local machines which allow developers to keep track of commit histories and supports collaborative work.	This is a cloud-based source code repository developed by using git.
This is maintained by “The Linux Foundation”.	This was acquired by “Microsoft”
SVN, Mercurial, etc are the competitors	GitLab, Atlassian BitBucket, etc are the competitors.


17. Can you give differences between “pull request” and “branch”?

pull request	branch
This process is done when there is a need to put a developer’s change into another person’s code branch. 	A branch is nothing but a separate version of the code.


16. Differentiate between git pull and git fetch.


14. What differentiates between the commands git remote and git clone?




13. What is the command used to delete a branch?
To delete a branch we can simply use the command git branch –d [head].
To delete a branch locally, we can simply run the command: git branch -d <local_branch_name>
To delete a branch remotely, run the command: git push origin --delete <remote_branch_name>
Deleting a branching scenario occurs for multiple reasons. One such reason is to get rid of the feature branches once it has been merged into the development branch.


12. Tell me something about git stash?
Git stash can be used in cases where we need to 
switch in between branches and at the same time 
not wanting to lose edits in the current branch.
 Running the git stash command basically pushes 
 the current working directory state and index to the stack for future use and thereby providing a 
clean working directory for other tasks.


7. What does git annotate command do?
This command annotates each line within the given file with information from the commit which introduced that change. This command can also optionally annotate from a given revision.
Syntax: git annotate [<options>] <file> [<revision>]
You can get to learn more about this command from the official git documentation here.



8. What is the difference between git stash apply vs git stash pop command?


6. What is a detached HEAD and what causes this and how to avoid this?

3. Can you tell something about git reflog?

1. What has to be run to squash multiple commits (last N) into a single commit?

6. What is the functionality of git ls-tree?



| #  | Question                                | What Interviewer Checks                  |
| -- | --------------------------------------- | ---------------------------------------- |
| 1  | What is Git?                            | Understanding of version control systems |
| 2  | What is GitHub?                         | Understanding of remote repositories     |
| 3  | Difference between Git and GitHub?      | Conceptual clarity                       |
| 4  | What is a repository in Git?            | Knowledge of project storage             |
| 5  | What is a commit in Git?                | Version history basics                   |
| 6  | What does `git init` do?                | Creating a new repository                |
| 7  | What does `git clone` do?               | Copying remote repo locally              |
| 8  | What does `git status` show?            | Staging area awareness                   |
| 9  | What does `git add` do?                 | Staging changes                          |
| 10 | What does `git commit -m "message"` do? | Committing staged changes                |
| 11 | What does `git log` show?               | Viewing commit history                   |
| 12 | How do you undo the last commit?        | Knowledge of `git reset` or `git revert` |
| 13 | How do you create a new branch?         | `git branch branch-name`                 |
| 14 | How do you switch branches?             | `git checkout` / `git switch`            |
| 15 | How do you delete a branch?             | `git branch -d branch-name`              |



🟡 2. Intermediate Git & GitHub Questions


| #  | Question                                                     | Key Concepts                                         |
| -- | ------------------------------------------------------------ | ---------------------------------------------------- |
| 16 | What is the difference between `git pull` and `git fetch`?   | Understanding of local vs remote sync                |
| 17 | What is the difference between `git merge` and `git rebase`? | Merge vs rebase workflows                            |
| 18 | What is a remote?                                            | Remote connections in Git                            |
| 19 | What is `origin`?                                            | Default remote name                                  |
| 20 | How do you push changes to GitHub?                           | `git push origin branch-name`                        |
| 21 | What is `.gitignore` used for?                               | Ignoring unwanted files                              |
| 22 | How do you resolve merge conflicts?                          | Conflict resolution process                          |
| 23 | How do you stash changes?                                    | `git stash`, `git stash apply`, `git stash pop`      |
| 24 | How to see differences between commits?                      | `git diff`, `git log -p`                             |
| 25 | What is a detached HEAD state?                               | Working without branch reference                     |
| 26 | What is a fork?                                              | Copy of repo under your account                      |
| 27 | Difference between fork and clone?                           | Remote duplication vs local copy                     |
| 28 | How to contribute to an open-source project?                 | Fork → Clone → Branch → Commit → Push → Pull Request |
| 29 | What are pull requests (PR)?                                 | Code review workflow                                 |
| 30 | How to revert a specific commit without losing history?      | `git revert <commit>`                                |



🔵 3. Advanced & Tricky Git/GitHub Questions

| #  | Question                                                                             | Expected Knowledge                                        |
| -- | ------------------------------------------------------------------------------------ | --------------------------------------------------------- |
| 31 | What’s the difference between `git reset --soft`, `--mixed`, and `--hard`?           | Deep understanding of staging vs working directory        |
| 32 | What is `git cherry-pick` used for?                                                  | Applying specific commits from other branches             |
| 33 | How do you squash multiple commits into one?                                         | Interactive rebase: `git rebase -i HEAD~n`                |
| 34 | How do you rewrite commit history?                                                   | `git rebase -i`                                           |
| 35 | How do you handle accidental commits of sensitive data?                              | `git filter-branch`, `BFG Repo-Cleaner`, secrets rotation |
| 36 | What is the difference between `git merge --no-ff` and normal merge?                 | Creating explicit merge commits                           |
| 37 | How do you set up SSH keys for GitHub?                                               | `ssh-keygen`, adding to GitHub                            |
| 38 | How do you resolve a situation where `git push` is rejected due to non-fast-forward? | `git pull --rebase` or merging changes first              |
| 39 | What’s the difference between local and remote branches?                             | Sync mechanism                                            |
| 40 | How do you clean your working directory?                                             | `git clean -fd`                                           |
| 41 | How to tag a commit and push the tag?                                                | `git tag v1.0`, `git push origin v1.0`                    |
| 42 | What is `git submodule`?                                                             | Including one repo inside another                         |
| 43 | How do you handle versioning and releases with Git tags?                             | Semantic versioning with tags                             |
| 44 | How do you configure Git username & email globally and locally?                      | `git config --global user.name` etc.                      |
| 45 | What is `git reflog` and why is it useful?                                           | Recovering lost commits, branch movements                 |



🧠 4. Scenario-Based Questions (Frequently Asked)

| Scenario                                                                     | How to Answer                                                                        |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| You accidentally committed to the `main` branch instead of a feature branch. | Use `git reset` to undo locally, create a new branch, push changes, reset main       |
| You pushed a commit with sensitive data (e.g., API key).                     | Remove secrets, rotate keys, use BFG or filter-branch to rewrite history, force push |
| Your teammate pushed to `main` and now your push is rejected.                | Pull + rebase or merge their changes before pushing                                  |
| You made 10 messy commits, but want to make it one clean commit before PR.   | Interactive rebase (squash)                                                          |
| You accidentally deleted a branch.                                           | Use `git reflog` to find last commit and recreate branch                             |
