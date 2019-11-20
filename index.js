const core = require('./tokens/core')
const backgroundColors = require('./tokens/backgroundColors')
const spacing = require('./tokens/spacing')

const themeNames = ['light', 'dark']

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

  module.exports[themeName] = theme
})
