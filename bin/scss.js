const f = require('./helpers/file')
const t = require('./helpers/theme')
const pkg = require('./helpers/package')

pkg.logStart('scss')

t.themes.forEach((themeObj) =>
  f.fileOverwrite(`../scss/${themeObj.name}.scss`, getSassContent(themeObj.theme, themeObj.name)),
)

// get scss text from a theme object
function getSassContent(json, theme) {
  let sass = pkg.getHeaderComment(`/scss/${theme}.scss`, 'sass variables', pkg.getTimestamp())
  const keys = Object.keys(json)

  const formatValue = (val, token) => {
    let retVal = val

    if (token === 'Font') {
      retVal = `(${val})`
    } else if (token === 'FontWeight') {
      retVal = val
    } else if (Number.isInteger(val)) {
      retVal = `${val}px`
    } else if (token === 'BoxShadow') {
      let v = val.trim()

      if (v && v !== 'none') {
        retVal = `"${v}"`
      }
    }

    return retVal
  }

  for (let i = 0; i < keys.length; i++) {
    const k = keys[i]
    const values = json[k]
    const props = Object.keys(values)

    sass += `$${k}: (\n`

    for (let j = 0; j < props.length; j++) {
      const p = props[j]
      const v = formatValue(values[p], k)

      if (v) {
        sass += `  "${p}": ${v},\n`
      }
    }

    sass += `);\n`
  }

  return sass
}
