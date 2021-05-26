const f = require('./helpers/file')
const t = require('./helpers/theme')
const pkg = require('./helpers/package')

pkg.logStart('json')

t.themes.forEach((themeObj) =>
  f.fileOverwrite(`../json/${themeObj.name}.json`, getJsonContent(themeObj.theme)),
)

// get json text from a theme object
function getJsonContent(json) {
  return JSON.stringify(json)
}
