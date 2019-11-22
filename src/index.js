import core from 'src/tokens/core'
import backgroundColors from 'src/tokens/backgroundColors'
import spacing from 'src/tokens/spacing'

const buildTheme = (themeName) => ({
  ...core,
  BackgroundColors: {
    ...backgroundColors[themeName]
  },
  Spacing: {
    ...core.Spacing,
    ...spacing[themeName],
  }
})

export default buildTheme