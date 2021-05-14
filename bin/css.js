const f = require('./helpers/file')
const t = require('./helpers/theme')

console.log(`GENERATING FILES:  mx-design-tokens -> .css`)

t.themes.forEach((themeObj) =>
  f.fileOverwrite(`../css/${themeObj.name}.css`, getCssContent(themeObj.theme, themeObj.name)),
)

// get css text from a theme object
function getCssContent(json, theme) {
  let css = ':root {\n'
  const keys = Object.keys(json)

  const formatValue = (val, token) => {
    let retVal = val

    if (token === 'Font') {
      retVal = `(${val})`
    } else if (token === 'FontWeight') {
      retVal = val
    } else if (Number.isInteger(val)) {
      retVal = `${val}px`
    }

    return retVal
  }

  keys.forEach((key) => {
    const isColor = t.colorKeys.indexOf(key) !== -1
    let baseKey = `--mx-${theme}_${key}`

    Object.keys(json[key]).forEach((childKey) => {
      const value = formatValue(json[key][childKey], key)

      if (value) {
        css += `  ${baseKey}_${childKey}: ${value};\n`
      }
    })
  })

  css += `}\n`

  return css
}
