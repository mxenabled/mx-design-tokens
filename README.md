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

[CLICK HERE](docs/tokens.md) for a list of all the current tokens available.

## Compile Tokens

To compile tokens run the following:
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

## JSON

You can also retrieve a JSON version of the default themed objects directly from the repo. These files are located in the `json` directory.





