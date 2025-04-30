# 📦 Release Instructions for 2captcha-ts

To publish a new version of the `2captcha-ts` package to NPM using GitHub Actions:

## Step 1: Bump the version

Run one of the following commands:

```bash
npm version patch   # For bugfixes
npm version minor   # For new features
npm version major   # For breaking changes
```

## Step 2: Push with tags

```bash
git push --follow-tags
```

This triggers the GitHub Actions workflow to build and publish the package to NPM automatically.

## Done!

The new version will be available at [npmjs.com/package/2captcha-ts](https://www.npmjs.com/package/2captcha-ts)