const themes = require('./index.js')

const fs = require('fs');

const themeNames = ['light', 'dark']

themeNames.forEach(themeName => {
  const jsonContent = JSON.stringify(themes[themeName])

  fs.writeFile(`./json/${themeName}.json`, jsonContent, 'utf8', function (err) {
    if (err) {
      console.log(`An error occured while writing ${themeName} JSON Object to File.`)
      return console.log(err);
    }

    console.log(`${themeName}.json has been saved in the json directory.`);
  });

})
