# MX Design Tokens

A simple utility for sharing themed styling information.

## Installation

To install the package via npm into another JS project, run the following command:

```
npm install @mxenabled/design-tokens
```

To import the default themed objects:

```
import { light, dark } from '@mxenabled/design-tokens'
```

To build a custom colored themed object:

```
import { buildTheme } from '@mxenabled/design-tokens'

const myCustomOverrides = {
  "Color": {
    "Brand300": "green"
  },
  "Custom": {
    "ButtonHeight": 42,
    "InputText": "lime"
  }
}

const greenTheme = buildTheme('light', 'react', myCustomOverrides)
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

| Token Output Types                                                                        | Description |
| :---------------------------------------------------------------------------------------- | :----- |
| [Markdown](https://github.com/mxenabled/mx-design-tokens/blob/master/dist/output/md/tokens.md) | documentation for [light theme tokens](https://github.com/mxenabled/mx-design-tokens/blob/master/dist/output/md/tokens.md#-light-theme-tokens) |
| &nbsp; | documentation for [dark theme tokens](https://github.com/mxenabled/mx-design-tokens/blob/master/dist/output/md/tokens.md#-dark-theme-tokens) theme tokens |
| [JSON - React Web Apps](https://github.com/mxenabled/mx-design-tokens/blob/master/dist/output/json/light.json)                                      |
| [SCSS - Sass / Rails Apps](https://github.com/mxenabled/mx-design-tokens/blob/master/dist/output/scss/light.scss)                                   |
| [CSS - Other Web Apps](https://github.com/mxenabled/mx-design-tokens/blob/master/dist/output/css/light.css)                                         |
| JSON - React Native Apps (_work in progress..._)                                          |
| JSON - Mobile OS Apps (_work in progress..._)                                             |

## Generate files from Tokens

| Command              | Description                                                                                              |
| :------------------- | :------------------------------------------------------------------------------------------------------- |
|                      |                                                                                                          |
| `npm run build:all`  | Builds everything in one easy step                                                                       |
|                      |                                                                                                          |
| `npm run build`      | Compile `src` files out to the `dist` folder                                                             |
| `npm run build:docs` | Compile markdown documentation for [viewing all the tokens](https://github.com/mxenabled/mx-design-tokens/blob/master/dist/output/md/tokens.md)                    |
| `npm run build:json` | Compile static [JSON](https://www.json.org/) files to use as style objects in React Web Apps             |
| `npm run build:scss` | Compile static [SCSS](https://sass-lang.com/) variables to use in Sass / Rails Apps                      |
| `npm run build:css`  | Compile static [CSS](https://www.w3.org/Style/CSS/Overview.en.html) variables for use in any web project |

## Publishing to NPM

In order to make sure your changes make it to NPM you need to do the following steps in order after adding/changing tokens in the `src` directory:

1. Update the package version in `package.json`
1. Run `npm install` so that the `package-lock.json` updates with the new version
1. Run `npm run build:all` to ensure all output files are up to date
1. Update the `CHANGELOG.md` with your changes
1. Merge the code into `master`
1. Checkout the `master` branch
1. Run `npm publish`
1. Enter your OTP(one time password). This is the code from your 2 factor authentication for npm.