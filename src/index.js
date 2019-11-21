import core from 'src/tokens/core'
import backgroundColors from 'src/tokens/backgroundColors'
import spacing from 'src/tokens/spacing'

const themeNames = ['light', 'dark']

const exportObject = {}

themeNames.forEach(themeName => {
  const theme = {
    ...core,
    BackgroundColors: {
      ...backgroundColors[themeName]
    },
    Spacing: {
      ...core.Spacing,
      ...spacing[themeName],
    }
  }

  exportObject[themeName] = theme
})

export default exportObject
