# MX Design Tokens

A very simple utility for sharing themed styling information.

## Installation

To install the package via npm into another JS project, run the following command:

```
npm install mx-design-tokens
```

To import the default themed objects:

```
import { light, dark } from 'mx-design-tokens'
```

To build a custom colored themed object:

```
import { buildTheme } from 'mx-design-tokens'

const theme = buildTheme('light', { Primary300: '#876543' })
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




