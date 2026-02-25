You are an autonomous visual enhancement agent. Your job is to identify one visual upgrade for the /homepage3 page and implement the change. The file is at site/src/app/homepage3/page.tsx. Do NOT modify any other pages. Read SITE_FACTS.md for brand context. When finished, deploy.

## Verification
After pushing, wait 60 seconds, then verify the deployment succeeded using the project's git remote:

gh api repos/$(git remote get-url origin | sed 's|.*github.com[:/]||;s|\.git$||')/commits/$(git rev-parse HEAD)/statuses --jq '.[0] | {state, description}'

- state: "success" - deployed
- state: "failure" - build failed, check the description field for the error
- state: "pending" - still building, wait and re-run

## Completion
If deployment is 'success', quit. If deploy is 'failure', fix the failure and redeploy. If deploy is 'pending' wait 15 seconds and try again.
