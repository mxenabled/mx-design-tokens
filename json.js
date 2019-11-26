const themeImport = require('./dist/index.js')

const fs = require('fs');

const themes = [{ name: 'light', theme: themeImport.light}, { name: 'dark', theme: themeImport.dark}]

themes.forEach(themeObj => {
  const jsonContent = JSON.stringify(themeObj.theme)

  fs.writeFile(`./json/${themeObj.name}.json`, jsonContent, 'utf8', function (err) {
    if (err) {
      console.log(`An error occured while writing ${themeObj.name} JSON Object to File.`)
      return console.log(err);
    }

    console.log(`${themeObj.name}.json has been saved in the json directory.`);
  });
})
