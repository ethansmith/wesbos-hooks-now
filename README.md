# Read Me?

This is a WIP learning project, based on Wes Bos' Advanced React course and including quite a few tweaks to make it play well with React hooks, recent versions of Prisma, Next, and Now, and Grommet. Most of the hard work on these updates was pulled off by [@brunocrosier](https://github.com/brunocrosier/wesbos-hooks).

Everything pushed to the `master` branch should work in development and production environments. In my setup the Prisma database is deployed on Heroku, the `/backend` folder is deployed via a Now.sh project, and the `/frontend` folder is deployed in a separate Now.sh project.

My deployed frontend is [available here](https://provision-frontend.ethansmith.now.sh). This may or may not work for you.

If you're deploying this on your own, you'll need to do a few things:

1. Update values in `/backend/now.json`, `/frontend/now.json`, and `/frontend/config.js` with your own URIs.

2. Create a new env file (not included in this repo): `/backend/variables.env` with the following keys (replace values with your own):

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

3. Set a few Now.sh secrets to match these lines in `/backend/now.json`:
   ```
   "PRISMA_SECRET": "@hooks_prisma_secret",
   "APP_SECRET": "@hooks_app_secret",
   ```
   You may change these to `@whatever_you_like` as long as what's listed in this file matches the name of the secret you create (e.g. `now secret add whatever_you_like yoursupersecuresecret`).

Good luck!
