# MX Design Tokens

A very simple utility for sharing themed styling information.

## Installation

To install the package via npm into another JS project, run the following command:

```
npm install mx-design-tokens
```

To import the default themed objects:

```
import { light, dark, targets } from 'mx-design-tokens'
```

To build a custom colored themed object:

```
import { buildTheme, targets } from 'mx-design-tokens'

const tokenOverrides = {
  "Color": {
    "Brand300": '#876543'
  }
}

const theme = buildTheme('light', targets.REACT, tokenOverrides)
```

## Development Environment

Run the following commands in order to setup a local build environment:

```
git clone https://github.com/mxenabled/mx-design-tokens.git
cd ./mx-design-tokens
npm i
npm run build:all
```

## Tokens

[CLICK HERE](docs/tokens.md) for a list of all the current tokens available with default colors from the light theme.

## Generate files from Tokens

| Command              | Description                                                                 |
| -------------------- | --------------------------------------------------------------------------- |
| `npm run build`      | Create / Update files in `dist` folder                                      |
| `npm run build:docs` | Update the markdown for viewing the [tokens](docs/tokens.md)                |
| `npm run build:json` | Compile static JSON tokens for development                                  |
| `npm run build:scss` | Compile static SCSS files for projects using [Sass](https://sass-lang.com/) |
| `npm run build:css`  | Compile static CSS variables for use in any web project                     |
| `npm run build:all`  | Builds everything above in one easy step                                    |

## Publishing to NPM

In order to make sure your changes make it to NPM you need to do the following **before** publishing to NPM:

1. After adding/changing tokens in `src` be sure to run `npm run build:all` to ensure all output files are up to date
2. Update the package version in `package.json`
3. Update the `CHANGELOG.md`
4. Merge the code into master
