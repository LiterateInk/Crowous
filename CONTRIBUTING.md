# Contributing

## Development

To start developing, clone the repository and install the dependencies.

```bash
# Clone the repository.
git clone https://github.com/LiterateInk/Crowous && cd Crowous
# Switch to the JS/TS implementation branch.
git checkout js
# Install dependencies.
pnpm install
```

> In case you don't have `pnpm` installed, you can install it by running `npm install --global pnpm`.

## Publishing

We use our internal tool [QuickRelease](https://github.com/LiterateInk/QuickRelease) to write a new release.

It'll bump the version, push a new tag and an action will automatically publish the package to NPM.
