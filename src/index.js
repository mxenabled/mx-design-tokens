import core from 'src/tokens/core'
import backgroundColor from 'src/tokens/backgroundColor'
import borderColor from 'src/tokens/borderColor'
import borderRadius from 'src/tokens/borderRadius'
import boxShadow from 'src/tokens/boxShadow'
import spacing from 'src/tokens/spacing'
import textColor from 'src/tokens/textColor'

const buildTheme = themeName => ({
  ...core,
  BackgroundColor: backgroundColor[themeName],
  BorderColor: borderColor[themeName],
  BorderRadius: {
    ...core.BorderRadius,
    ...borderRadius[themeName],
  },
  BoxShadow: {
    ...core.BoxShadow,
    ...boxShadow[themeName],
  },
  Spacing: {
    ...core.Spacing,
    ...spacing[themeName],
  },
  TextColor: textColor[themeName],
})

export const light = buildTheme('light')

export const dark = buildTheme('dark')
