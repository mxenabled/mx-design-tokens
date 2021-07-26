import core from 'src/tokens/core/core'
import backgroundColor from 'src/tokens/backgroundColor'
import borderColor from 'src/tokens/borderColor'
import borderRadius from 'src/tokens/borderRadius'
import boxShadow from 'src/tokens/boxShadow'
import letterSpacing from 'src/tokens/letterSpacing'
import fontSize from 'src/tokens/fontSize'
import spacing from 'src/tokens/spacing'
import textColor from 'src/tokens/textColor'
import zIndex from 'src/tokens/zIndex'
import { getTargetSpecificOverrides } from 'src/tokens/core/mods'

export const targets = {
  REACT: 'react',
  REACT_NATIVE: 'react_native',
  NATIVE: 'native',
}

export const themes = {
  LIGHT: 'light',
  DARK: 'dark',
}

export const buildTheme = (theme = themes.LIGHT, target = targets.REACT, tokenOverrides = {}) => {
  const targetOverrides = getTargetSpecificOverrides(target)
  const builtCore = {
    ...core,
    ...targetOverrides,
  }

  return {
    ...builtCore,
    BackgroundColor: backgroundColor[theme](builtCore),
    BorderColor: borderColor[theme](builtCore),
    BorderRadius: borderRadius[theme](builtCore),
    BoxShadow: boxShadow[theme](builtCore),
    LetterSpacing: letterSpacing[theme](builtCore),
    FontSize: fontSize[theme](builtCore),
    Spacing: spacing[theme](builtCore),
    TextColor: textColor[theme](builtCore),
    ZIndex: zIndex[theme](builtCore),
    ...tokenOverrides,
  }
}

export const light = buildTheme('light')
export const dark = buildTheme('dark')
