const f = require('./helpers/file')
const t = require('./helpers/theme')
const pkg = require('./helpers/package')

pkg.logStart('docs')

let tokenMarkdown = getDocsHeader()

t.themes.forEach((themeObj) => {
  tokenMarkdown += getDocsContent(themeObj.name)
})

f.fileOverwrite(`../dist/output/md/tokens.md`, tokenMarkdown)

// get markdown for the page header
function getDocsHeader() {
  let md = '# MX Design Tokens\n\n'
  md += `#### <sup><code>${pkg.packageInfo.name} (${pkg.packageInfo.version})</code>`
  md += ` &nbsp; _last generated: ${pkg.getTimestamp()}_</sup>\n\n`

  return md
}

// get markdown text from a theme object
function getDocsContent(themeName) {
  const json = t.themeList[themeName]
  const keys = Object.keys(json)
  const icon = themeName === 'light' ? '🌞' : '🌙'

  let md = `## ${icon} ${themeName.toUpperCase()} THEME TOKENS\n\n`

  keys.forEach((key) => {
    md += `### ${key} &nbsp; <sub><sup>( _${themeName}_ )</sup></sub>\n\n`

    if (t.colorKeys.indexOf(key) !== -1) {
      md += `| Key | Value | Color |\n`
      md += `| :-- | :---- | :---- |\n`
    } else {
      md += `| Key | Value |\n`
      md += `| :-- | :---- |\n`
    }

    Object.keys(json[key]).forEach((childKey) => {
      const val = json[key][childKey]
      const value = val === 0 ? 0 : val || '&nbsp;'

      if (t.colorKeys.indexOf(key) !== -1) {
        if (value && value.indexOf('#') !== -1) {
          let c = value.split('#')[1]
          md += `| ${childKey} | ${value} | ![${value}](https://via.placeholder.com/32/${c}/${c}?text=+) |\n`
        } else {
          md += `| ${childKey} | ${value} | &nbsp; |\n`
        }
      } else {
        md += `| ${childKey} | ${value} |\n`
      }
    })

    md += `\n---\n\n`
  })

  md += `\n</details>\n\n`

  return md
}
