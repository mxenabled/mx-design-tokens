const f = require('./helpers/file')
const t = require('./helpers/theme')
const pkg = require('./helpers/package')

pkg.logStart('scss')

t.themes.forEach((themeObj) =>
  f.fileOverwrite(
    `../dist/output/scss/${themeObj.name}.scss`,
    getSassContent(themeObj.theme, themeObj.name),
  ),
)

// get scss text from a theme object
function getSassContent(json, theme) {
  let sass = pkg.getHeaderComment(`/scss/${theme}.scss`, 'sass variables', pkg.getTimestamp())
  const keys = Object.keys(json)
  const formatValue = (val, token) => {
    // explicitly define any decorators which should appear before or after each value of various tokens
    const tokenDecorators = {
      BorderRadius: {
        post: 'px',
      },
      BoxShadow: {
        pre: '"',
        post: '"',
        skip: ['none'],
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

  for (let i = 0; i < keys.length; i++) {
    const k = keys[i]
    const values = json[k]
    const props = Object.keys(values)

    sass += `$${k}: (\n`

    for (let j = 0; j < props.length; j++) {
      const p = props[j]
      const v = values[p] ? formatValue(values[p], k) : null

      if (v) {
        sass += `  "${p}": ${v},\n`
      }
    }

    sass += `);\n`
  }

  return sass
}
