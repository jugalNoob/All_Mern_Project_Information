| Step                                  | Purpose                     | Who            |
| ------------------------------------- | --------------------------- | -------------- |
| 1. Install GitHub for Jira            | Bridge between tools        | Admin          |
| 2. Connect repos                      | Let Jira access GitHub      | Admin          |
| 3. Use issue keys in branches/commits | Link dev work automatically | Developer ✅    |
| 4. Create PRs with issue keys         | Link reviews                | Developer      |
| 5. Add Automation                     | Auto status transitions     | Admin / DevOps |
| 6. Test integration                   | Verify flow works           | Developer      |
| 7. Track in Jira                      | See commits, PRs, builds    | Whole team     |


Excellent ✅
Let’s go step by step to set up Jira ↔ GitHub integration, so
 that your commits, branches, and PRs automatically update Jira issues.
This is the real developer setup used in professional Agile teams 👇

🧰 What You’ll Need

✅ A Jira Software account (Cloud) — e.g., https://yourcompany.atlassian.net

✅ A GitHub account with access to the repo you want to link

🧑‍💻 Admin rights on both Jira & GitHub (for initial setup)

📝 Consistent use of Jira issue keys in branch names / commits (e.g., WEB-101)


🌐 Step 1: Install GitHub for Jira App

Go to your Jira Cloud:

https://<your-domain>.atlassian.net


Click the ⚙️ (Settings) icon → Apps

Click Find new apps (or “Explore more apps”)

Search for GitHub for Jira

Click Install (it’s free for integration)

Follow the prompt to log in with GitHub and authorize.

👉 This app will act as the “bridge” between Jira issues and GitHub commits/PRs.



🔗 Step 2: Connect Your GitHub Organization / Repositories

After installing the app:

Go to

https://github.atlassian.com/


(You might get redirected from Jira automatically)

Choose:

GitHub.com → for public/private repos on github.com

GitHub Enterprise Server → if you’re using a private server

Authorize Jira to access your GitHub organization.

Select the repositories you want to integrate.
👉 Example: mern-ecommerce-frontend and mern-ecommerce-backend

Confirm & finish the setup.

✅ Now Jira can “listen” to commits, PRs, and branches in those repos.



🌿 Step 3: Use Jira Issue Keys in Branch Names & Commits

This is the most important step for developers.
Every commit or branch must reference the Jira issue key exactly (e.g., WEB-101).

✅ Good Branch Names
feature/WEB-101-login-ui
bugfix/WEB-201-fix-button
hotfix/WEB-202-prod-login-error

✅ Good Commit Messages
WEB-101: Add login form component
WEB-102: Implement JWT-based login API
WEB-201: Fix login button event handler


Jira will automatically pick these up and show them in the “Development” panel of the issue.

🔁 Step 4: Create a Pull Request (PR)

When you create a PR with the issue key in the branch name or PR title, Jira automatically links it.

PR Title Example

WEB-101: Implement login UI


Jira Issue WEB-101 will show:

Development
🔗 1 branch • 💬 1 pull request • 🟢 3 commits

And the status might auto-move from “In Progress” → “In Review”, if Jira Automation is set up (next step 👇).


⚡ Step 5: (Optional but Powerful) Add Jira Automation Rules

This step makes the flow hands-free.

In Jira → Project Settings → Automation

Create a New Rule

--Example Rule:

Trigger: “Pull request created” (GitHub)

Condition: Issue status = “In Progress”

Action: Transition issue to “In Review”

--Another rule:

Trigger: “Pull request merged”

Action: Transition issue to “Done”

👉 This way, when you merge the PR, Jira auto-updates the issue — no manual clicking needed ✅



🧪 Step 6: Test the Integration

Pick a Jira issue, e.g., WEB-103

Create a branch:

git checkout -b feature/WEB-103-integration


Make a commit:

git commit -m "WEB-103: Connect UI to login API"
git push origin feature/WEB-103-integration


Create a PR in GitHub with title:

WEB-103: Connect UI to login API


👉 In Jira issue WEB-103, you’ll now see:

Branch

Commits

PR

Status transitions if automation is enabled

📊 Step 7: Track Everything in Jira

Once this is in place, Jira shows a Development Panel on each issue:

Development
-----------
Branch: feature/WEB-103-integration
Commits: 3
Pull Request: #45 (Open)
Build: Passed ✅


Also, in Sprint Reports / Release Reports, you’ll get visibility like:

✅ WEB-103 → Merged in PR #45 → Deployed in v1.0.0

📝 Bonus: CI/CD Integration (Optional)

You can integrate CI/CD tools (e.g., GitHub Actions, Jenkins) so that:

After successful build/deploy → Jira issue automatically transitions to “Done”

Jira shows build results inside the issue

Example GitHub Actions step:

- name: Notify Jira
  uses: atlassian/gajira-comment@v3
  with:
    issue: WEB-103
    comment: "Deployment completed ✅"
