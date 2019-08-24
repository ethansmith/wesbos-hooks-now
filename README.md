# Read Me?

This is a WIP learning project, based on Wes Bos' Advanced React course and including quite a few tweaks to make it play well with React hooks, recent versions of Prisma, Next, and Now, and Grommet. Most of the hard work on these updates was pulled off by [@brunocrosier](https://github.com/brunocrosier/wesbos-hooks).

Everything pushed to the `master` branch should work in development and production environments. In my setup the Prisma database is deployed on Heroku, the `/backend` folder is deployed via a Now.sh project, and the `/frontend` folder is deployed in a separate Now.sh project.

My deployed frontend is [available here](https://wesbos-hooks-now-frontend.ethansmith.now.sh). This should always be sync'd with the `master` branch of this repo and may or may not work for you. Note that it may take a moment to spin everything up if it hasn't been accessed in a while. If it is working, feel free to create an account, poke around, add an item, etc. **In case it's not obvious, there's nothing about this project that's refined or production-ready ;)**

_If you're attempting to deploy this on your own, you'll need to do a few things:_

1. Do all the obvious stuff... `npm install` in `/frontend` and `/backend`, `npm run deploy` in `/backend`, etc. More detailed direction is available in [Wes Bos' Advanced React course](https://advancedreact.com), which though a bit outdated at this point—hence these updates—is still pretty rad and comes with access to a helpful and lively Slack community).

2. Change the `"name"` values in `/backend/now.json` and `/frontend/now.json` to whatever you'd like. Push to now (e.g. run `now` from each directory) and record the aliased urls that are provisioned for you.

3. Update values in `/backend/now.json`, `/frontend/now.json`, and `/frontend/config.js` with those urls you noted, along with your Prisma deployment (likely on Heroku).

4. Create a new env file (not included in this repo): `/backend/variables.env` with the following keys (replace values with your own):

   ```
   LOCAL_FRONTEND_URL="http://localhost:7777"
   PROD_FRONTEND_URL="###"
   PRISMA_ENDPOINT="###"
   PRISMA_SECRET="###"
   APP_SECRET="###"
   STRIPE_SECRET="###"
   PORT=####
   MAIL_HOST="###"
   MAIL_PORT=###
   MAIL_USER="###"
   MAIL_PASS="###"
   ```

5. Edit the config file for the Now backend, `/backend/now.json`, replacing values with your own. I've used Now secrets to keep sensitive info out of this repo, including:

   ```
   "PRISMA_SECRET": "@hooks_prisma_secret",
   "APP_SECRET": "@hooks_app_secret",
   ```

   You may change these to `@whatever_you_like` as long as what's listed in this file matches the name of the secret you create (e.g. `now secret add whatever_you_like yoursupersecuresecret`).

6. You'll want to run `npm run deploy` from the `/backend/` folder after every change of the `variables.env` file before redeploying to Now. I've also noticed that if you change one of the secrets after your first deployment in a Now project, you'll likely get an `invalid token` error. Quickest fix for me has been to set a new name in `/backend/now.json` and update backend url refs as necessary.

Good luck!
