https://sjugal126.atlassian.net/jira/software/projects/MSD/boards/34/backlog

Perfect 👌
Let’s walk through a complete practical example of how a MERN stack developer uses Jira from start to release for a common feature:
👉 “User Login Flow”

We’ll follow the real Agile + Git + Jira process step by step 👇

🧭 Scenario

Your team is building a web app. The PM wants a “Login Feature” with:

UI form (email + password)

Backend API (auth with JWT)

Error handling & redirects

Deployment to staging

🧱 Step 1: Create Epic & Stories (PM / Tech Lead)

Epic: 🧭 WEB-EPIC-1 - Authentication Module

Represents the whole “Authentication” section of the project.

| Story Key | Story Title            | Description                                   |
| --------- | ---------------------- | --------------------------------------------- |
| `WEB-101` | Login UI Page          | Create login form with validation             |
| `WEB-102` | Login API (Node.js)    | Handle login requests and issue JWT tokens    |
| `WEB-103` | Integration & Redirect | Connect UI with API and redirect to dashboard |
| `WEB-104` | Error Handling         | Show error messages on failed login           |


🏃 Step 2: Sprint Planning

During Sprint Planning, team selects stories WEB-101 to WEB-104 to deliver this sprint (2 weeks).
Developers estimate effort using Story Points (e.g., 3 for UI, 5 for API).
The sprint is started, and these stories are moved into the Sprint Board.


🧑‍💻 Step 3: Assign Tasks to Developer

You, the MERN developer, are assigned:

WEB-101 – Login UI

WEB-102 – Login API

You open Jira Board → To Do → Pick up WEB-101 → Move to “In Progress”.




🌿 Step 4: Branch Naming & Commit Messages

For WEB-101:

Create a branch:

git checkout -b feature/WEB-101-login-ui


Commit with Jira issue key:

git commit -m "WEB-101: Added login page with form validation"


✅ Because the commit contains WEB-101, Jira will automatically link this commit to the issue if GitHub/GitLab is integrated.

💻 Step 5: Development Work
Frontend (WEB-101)

Create Login.jsx in React

Add form, client-side validation

Add routing (/login)

Backend (WEB-102)

Create Express route /api/login

Check user credentials

Issue JWT token

🔁 Step 6: Move to Review → Create Pull Request

Once you’re done coding:

Push your branch to remote.

git push origin feature/WEB-101-login-ui


Open PR:
Title:

WEB-101: Implement Login UI


Description:

- Added form with validation
- Integrated routing
- Linked to backend placeholder API


Assign reviewers (e.g., Tech Lead).

In Jira → Move issue WEB-101 to “In Review”.

Or, Jira does this automatically if automation is set up for “PR opened”.

🧪 Step 7: QA & Testing

Once PR is merged, CI/CD deploys to Staging.

QA team tests the login flow.

If bug found → QA creates a Bug issue, e.g., WEB-201: Login button not responding.

You fix it and link the bug to the original story.

After QA approves:

Move story to “Done”.

🧠 Step 8: Jira Linking Between Issues

WEB-102 (API) is marked as “Blocks” → WEB-103 because UI integration depends on API.

Jira automatically shows dependency arrows on the board.

🚀 Step 9: Release & Versioning

When the sprint ends, the release manager tags a version:

Release v1.0.0 - Authentication Module


In Jira:

All issues under Epic WEB-EPIC-1 marked as Done.

Generate Release Report:

✅ Completed Stories: WEB-101 → WEB-104

🐞 Bugs fixed: WEB-201

You can click “Release” in Jira → attach release notes to deployed version.

📊 Step 10: Sprint Report & Retrospective

At the end of sprint:

Jira generates Burndown Chart → shows that the team finished stories on time.

In retrospective, you discuss:

✅ UI & API integration worked smoothly

❌ Bug reporting was late → QA needs earlier builds

📝 Summary: Developer’s Jira Flow for One Feature


| Step | Action                               | Jira Status         |
| ---- | ------------------------------------ | ------------------- |
| 1    | Take Story                           | To Do → In Progress |
| 2    | Create branch, commit with issue key | In Progress         |
| 3    | Develop feature                      | In Progress         |
| 4    | Create PR, link to Jira              | In Review           |
| 5    | QA tests & approves                  | Testing             |
| 6    | Merge, deploy, close issue           | Done                |
| 7    | Sprint ends, generate reports        | Released            |




🧠 Why This Matters for Web Developers

Keeps your code, tasks, and releases perfectly synced ✅

Your team can see progress at any moment, no need to ask “Is it done?”

You avoid missing features or bugs during sprints.

Perfect for interviews — you can say:

“We used Jira to manage features end-to-end. Each story was tracked through development, integrated with Git commits and PRs, tested in QA, and included in sprint reports.”

