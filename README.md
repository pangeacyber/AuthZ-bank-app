# AuthZ Pango Bank App

The base of this app is the Auth0 Next.js SDK Sample Application

This sample demonstrates the integration of [Auth0 Next.js SDK](https://github.com/auth0/nextjs-auth0) into a Next.js application created using [create-next-app](https://nextjs.org/docs/api-reference/create-next-app). The sample is a companion to the [Auth0 Next.js SDK Quickstart](https://auth0.com/docs/quickstart/webapp/nextjs).

We then modified the base to add the Bank themeing and calls to Pangea's AuthZ Service to manage access using Auth0's user.sub

## PreReqs

1. Create a Free Auth0 Account by going to [Auth0](https://auth0.com) and click **Sign Up**.
2. Create a free [Pangea Account](https://pangea.cloud/) and enable AuthZ. The exact configuration depends on your specifc use cases.


## Project setup & Configuration

1. Copy the project down

2. Rename `.env.local.example` to `.env.local`

3. Replace the Auth0 Domain, Client ID and Client Secret in the `.env.local` for the authentication flow to work. (see more info about [loading environmental variables in Next.js](https://nextjs.org/docs/basic-features/environment-variables)):

**Note**: Make sure you replace `AUTH0_SECRET` with your own secret (you can generate a suitable string using `openssl rand 

4. Replace PANGEA_TOKEN and PANGEA_DOMAIN with the values from Pangea AuthZ Overview page

5. Use `npm` to install the project dependencies:

```bash
npm install
```

## Run the sample

This compiles and serves the Next.js app and starts the API server on port 3001.

```bash
npm run dev
```

## What is Auth0?

Auth0 helps you to:

* Add authentication with [multiple sources](https://auth0.com/docs/identityproviders), either social identity providers such as **Google, Facebook, Microsoft Account, LinkedIn, GitHub, Twitter, Box, Salesforce** (amongst others), or enterprise identity systems like **Windows Azure AD, Google Apps, Active Directory, ADFS, or any SAML Identity Provider**.
* Add authentication through more traditional **[username/password databases](https://auth0.com/docs/connections/database/custom-db)**.
* Add support for **[linking different user accounts](https://auth0.com/docs/users/user-account-linking)** with the same user.
* Support for generating signed [JSON Web Tokens](https://auth0.com/docs/tokens/json-web-tokens) to call your APIs and **flow the user identity** securely.
* Analytics of how, when, and where users are logging in.
* Pull data from other sources and add it to the user profile through [JavaScript rules](https://auth0.com/docs/rules).

## Author

[Auth0](https://auth0.com)
