import core from 'src/tokens/core'
import backgroundColors from 'src/tokens/backgroundColors'
import borderColors from 'src/tokens/borderColors'
import borderRadii from 'src/tokens/borderRadii'
import shadows from 'src/tokens/shadows'
import spacing from 'src/tokens/spacing'
import textColors from 'src/tokens/textColors'

const buildTheme = (themeName) => ({
  ...core,
  BackgroundColors: backgroundColors[themeName],
  BorderColors: borderColors[theme],
  BorderRadii: {
    ...core.BorderRadii,
    ...borderRadii[themeName],
  },
  Shadows: {
    ...core.Shadows,
    BoxShadows[themeName],
  },
  Spacing: {
    ...core.Spacing,
    ...spacing[themeName],
  },
  TextColors: textColors[themeName],
})

export const light = buildTheme('light')

export const dark = buildTheme('dark')
