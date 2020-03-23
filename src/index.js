import core from 'src/tokens/core'
import backgroundColor from 'src/tokens/backgroundColor'
import borderColor from 'src/tokens/borderColor'
import borderRadius from 'src/tokens/borderRadius'
import boxShadow from 'src/tokens/boxShadow'
import fontSize from 'src/tokens/fontSize'
import spacing from 'src/tokens/spacing'
import textColor from 'src/tokens/textColor'

export const targets = {
  REACT: 'react',
  REACT_NATIVE: 'react_native',
  NATIVE: 'native',
}

export const buildTheme = (themeName, target=targets.REACT, customColors={}) => {
  const customCore = {
    ...core,
    Color: {
      ...core.Color,
      ...customColors,
    },
  }

  const builtCore = {}

  Object.keys(customCore).forEach(coreKey => {
    const value = typeof customCore[coreKey] === 'function' ?
      customCore[coreKey](target) :
      customCore[coreKey]

    builtCore[coreKey] = value
  })


  return {
    ...builtCore,
    BackgroundColor: backgroundColor[themeName](builtCore),
    BorderColor: borderColor[themeName](builtCore),
    BorderRadius: {
      ...core.BorderRadius,
      ...borderRadius[themeName](builtCore),
    },
    BoxShadow: {
      ...core.BoxShadow,
      ...boxShadow[themeName](builtCore),
    },
    FontSize: {
      ...core.FontSize,
      ...fontSize[themeName](builtCore),
    },
    Spacing: {
      ...core.Spacing,
      ...spacing[themeName](builtCore),
    },
    TextColor: textColor[themeName](builtCore),
  }
}

export const light = buildTheme('light')

export const dark = buildTheme('dark')
