# Playwright TypeScript framework

Login tests for the public Sauce Demo site. Page objects, GitHub Actions, Jenkinsfile.

## Run

npm ci
npx playwright install
npx playwright test

## CI

GitHub Actions runs on every push to main.
Jenkins: use the Jenkinsfile in a pipeline job. The agent needs Node 22 and permission to install Playwright browsers.
