const f = require('./helpers/file')
const t = require('./helpers/theme')
const pkg = require('./helpers/package')

pkg.logStart('json')

t.themes.forEach((themeObj) =>
  f.fileOverwrite(`../dist/output/json/${themeObj.name}.json`, getJsonContent(themeObj.theme)),
)

// continue to output single line json files in the same location
t.themes.forEach((themeObj) =>
  f.fileOverwrite(`../dist/json/${themeObj.name}.json`, getJsonContent(themeObj.theme, true)),
)

// get json text from a theme object
function getJsonContent(json, isOneLine = false) {
  return isOneLine ? JSON.stringify(json) : JSON.stringify(json, null, 2)
}
