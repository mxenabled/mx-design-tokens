const fs = require('fs');

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

  const jsonContent = JSON.stringify(theme)

  fs.writeFile(`${themeName}.json`, jsonContent, 'utf8', function (err) {
    if (err) {
      console.log("An error occured while writing JSON Object to File.");
      return console.log(err);
    }

    console.log("JSON file has been saved.");
  });

})
