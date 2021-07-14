import core from 'src/tokens/core'
import backgroundColor from 'src/tokens/backgroundColor'
import borderColor from 'src/tokens/borderColor'
import borderRadius from 'src/tokens/borderRadius'
import boxShadow from 'src/tokens/boxShadow'
import letterSpacing from 'src/tokens/letterSpacing'
import fontSize from 'src/tokens/fontSize'
import spacing from 'src/tokens/spacing'
import textColor from 'src/tokens/textColor'
import zIndex from 'src/tokens/zIndex'

export const targets = {
  REACT: 'react',
  REACT_NATIVE: 'react_native',
  NATIVE: 'native',
}

export const themes = {
  LIGHT: 'light',
  DARK: 'dark',
}

export const buildTheme = (
  themeName = themes.LIGHT,
  target = targets.REACT,
  tokenOverrides = {},
) => {
  const targetOverrides = getTargetSpecificOverrides(target, core)

  const builtCore = {
    ...core,
    ...targetOverrides,
  }

  return {
    ...builtCore,
    BackgroundColor: backgroundColor[themeName](builtCore),
    BorderColor: borderColor[themeName](builtCore),
    BorderRadius: borderRadius[themeName](builtCore),
    BoxShadow: boxShadow[themeName](builtCore),
    LetterSpacing: letterSpacing[themeName](builtCore),
    FontSize: fontSize[themeName](builtCore),
    Spacing: spacing[themeName](builtCore),
    TextColor: textColor[themeName](builtCore),
    ZIndex: zIndex[themeName](builtCore),
    ...tokenOverrides,
  }
}

// keep target specific token modifications here so they are easier to manage
function getTargetSpecificOverrides(target, tokens) {
  // React Web - all token values should be stored in core and ready to use without modifications
  let reactWebOverrides = {}

  // Common changes applied to all targets excpet React Web apps
  const commonOverrides = {
    BoxShadow: { ...updateValues(core.BoxShadow, '') },
    Easing: {
      Default: {
        x1: 0.475,
        y1: 0.425,
        x2: 0,
        y2: 0.995,
      },
    },
  }

  // React Native - token modifications needed by React Native apps
  const reactNativeOverrides = {
    ...commonOverrides,
    Time: { ...addSuffix(core.Time, 'ms') },
  }
  // console.log(reactNativeOverrides)

  // Native - token modifications needed by Native OS apps
  const nativeOverrides = {
    ...commonOverrides,
    LineHeight: { ...removeSuffix(core.LineHeight, 'px') },
  }
  // console.log(nativeOverrides)

  if (target === targets.REACT_NATIVE) {
    return reactNativeOverrides
  } else if (target === targets.NATIVE) {
    return nativeOverrides
  }

  return reactWebOverrides
}

// helper functions which take in a list of key/value pairs and modify all values
function addSuffix(json, value = 'px') {
  let retValues = {}

  Object.keys(json).forEach(function (key) {
    retValues[key] = ''.concat(json[key], value)
  })

  return retValues
}

function removeSuffix(json, value = 'px', isNumeric = true) {
  let retValues = {}

  Object.keys(json).forEach(function (key) {
    if (json[key].slice(-value.length) === value) {
      const shortVal = json[key].slice(0, -value.length)
      const isNumeric = !isNaN(shortVal) && !isNaN(parseFloat(shortVal))

      retValues[key] = isNumeric ? parseFloat(shortVal) : shortVal
    }
  })

  return retValues
}

function updateValues(json, value = '') {
  let retValues = {}

  Object.keys(json).forEach(function (key) {
    retValues[key] = value
  })

  return retValues
}

export const light = buildTheme('light')
export const dark = buildTheme('dark')
