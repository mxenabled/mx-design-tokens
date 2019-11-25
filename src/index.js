import core from 'src/tokens/core'
import backgroundColors from 'src/tokens/backgroundColors'
import spacing from 'src/tokens/spacing'
import textColors from 'src/tokens/textColors'

const buildTheme = (themeName) => ({
  ...core,
  BackgroundColors: {
    ...backgroundColors[themeName]
  },
  Spacing: {
    ...core.Spacing,
    ...spacing[themeName],
  }
  TextColors: {
    ...textColors[themeName]
  }
})

export const light = buildTheme('light')

export const dark = buildTheme('dark')
