const f = require('./helpers/file')
const t = require('./helpers/theme')
const pkg = require('./helpers/package')

pkg.logStart('css')

t.themes.forEach((themeObj) =>
  f.fileOverwrite(`../css/${themeObj.name}.css`, getCssContent(themeObj.theme, themeObj.name)),
)

// get css text from a theme object
function getCssContent(json, theme) {
  let css = pkg.getHeaderComment(`/css/${theme}.css`, 'css variables', pkg.getTimestamp())
  css += ':root {\n'
  const keys = Object.keys(json)

  const formatValue = (val, token) => {
    // explicitly define any decorators which should appear before or after each value of various tokens
    const tokenDecorators = {
      BorderRadius: {
        post: 'px',
      },
      Font: {
        pre: '(',
        post: ')',
      },
      FontSize: {
        post: 'px',
      },
      Resolution: {
        post: 'px',
      },
      Spacing: {
        post: 'px',
      },
      Time: {
        post: 'ms',
      },
    }

    const td = { pre: '', post: '', skip: [], ...tokenDecorators[token] }

    let isExcluded = false

    for (let i = 0; i < td.skip.length; i++) {
      if (td.skip[i] === val) {
        isExcluded = true
      }
    }

    return isExcluded ? val : td.pre + val + td.post
  }

  keys.forEach((key) => {
    const isColor = t.colorKeys.indexOf(key) !== -1
    let baseKey = `--mx-${key}`

    Object.keys(json[key]).forEach((childKey) => {
      const value = json[key][childKey] ? formatValue(json[key][childKey], key) : null

      if (value) {
        css += `  ${baseKey}_${childKey}: ${value};\n`
      }
    })
  })

  css += `}\n`

  return css
}
