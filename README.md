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
import { buildTheme } from 'mx-design-tokens'

const theme = buildTheme('light', targets.REACT, { Primary300: '#876543' })
```

## Tokens

[CLICK HERE](docs/tokens.md) for a list of all the current tokens available with default colors from the light theme.

## Compile JSON Tokens

To compile static JSON tokens for development, run the following:

```
npm i
```

then

```
npm run build
```

then

```
npm run json
```

## Token Documentation

To update the auto-generated tokens documentation run the following:

```
npm run build:docs
```

## Publishing to NPM

In order to make sure you changes make it to NPM you need to run the following 3 commands, update the package version, and merge the code into master **before** publishing to NPM:

 ```
 npm run build
 npm run json
 npm run build:docs
 ```
This will insure the the json files are updated with your new tokens and the Docs page is also updated on Github.