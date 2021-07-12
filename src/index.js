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

export const buildTheme = (themeName, target = targets.REACT, customOverrides = {}) => {
  const customCore = {
    ...core,
    Color: {
      ...core.Color,
    },
    Font: {
      ...core.Font,
    },
  }

  const builtCore = {}

  Object.keys(customCore).forEach((coreKey) => {
    const value =
      typeof customCore[coreKey] === 'function' ? customCore[coreKey](target) : customCore[coreKey]

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
    LetterSpacing: letterSpacing[themeName](builtCore),
    FontSize: {
      ...core.FontSize,
      ...fontSize[themeName](builtCore),
    },
    Spacing: {
      ...core.Spacing,
      ...spacing[themeName](builtCore),
    },
    TextColor: textColor[themeName](builtCore),
    ZIndex: zIndex[themeName](builtCore),
    ...customOverrides,
  }
}

export const light = buildTheme('light')

export const dark = buildTheme('dark')
