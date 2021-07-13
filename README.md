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

| Token Output Types                                                                        |
| ----------------------------------------------------------------------------------------- |
| [Markdown - documentation for both light and dark theme tokens](dist/output/md/tokens.md) |
| [JSON - React Web Apps](dist/output/json/light.json)                                      |
| [SCSS - Sass / Rails Apps](dist/output/scss/light.scss)                                   |
| [CSS - Other Web Apps](dist/output/css/light.css)                                         |
| JSON - React Native Apps (_work in progress..._)                                          |
| JSON - Mobile OS Apps (_work in progress..._)                                             |

## Generate files from Tokens

| Command              | Description                                                                                              |
| -------------------- | -------------------------------------------------------------------------------------------------------- |
|                      |                                                                                                          |
| `npm run build:all`  | Builds everything in one easy step                                                                       |
|                      |                                                                                                          |
| `npm run build`      | Compile `src` files out to the `dist` folder                                                             |
| `npm run build:docs` | Compile markdown documentation for [viewing all the tokens](dist/output/md/tokens.md)                    |
| `npm run build:json` | Compile static [JSON](https://www.json.org/) files to use as style objects in React Web Apps             |
| `npm run build:scss` | Compile static [SCSS](https://sass-lang.com/) variables to use in Sass / Rails Apps                      |
| `npm run build:css`  | Compile static [CSS](https://www.w3.org/Style/CSS/Overview.en.html) variables for use in any web project |

## Publishing to NPM

In order to make sure your changes make it to NPM you need to do the following **before** publishing to NPM:

1. After adding/changing tokens in `src` be sure to run `npm run build:all` to ensure all output files are up to date
2. Update the package version in `package.json`
3. Update the `CHANGELOG.md`
4. Merge the code into master
