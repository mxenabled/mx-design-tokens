const f = require('./helpers/file')
const t = require('./helpers/theme')
const pkg = require('./helpers/package')

console.log(
  `GENERATING FILES:  ${pkg.packageInfo.name} (${pkg.packageInfo.version}) -> docs/tokens.md`,
)

f.fileOverwrite(`../docs/tokens.md`, getDocsContent(t.themeList.light))

// get markdown text from a theme object
function getDocsContent(json) {
  let md = `# ${pkg.packageInfo.name} - version ${pkg.packageInfo.version} (light theme)\n\n`
  const keys = Object.keys(json)

  keys.forEach((key) => {
    md += `\n## ${key}\n\n`

    if (t.colorKeys.indexOf(key) !== -1) {
      md += `| Key | Value | Color |\n`
      md += `| --- | ----- | ----- |\n`
    } else {
      md += `| Key | Value |\n`
      md += `| --- | ----- |\n`
    }

    Object.keys(json[key]).forEach((childKey) => {
      const value = json[key][childKey]

      if (t.colorKeys.indexOf(key) !== -1) {
        if (value.indexOf('#') !== -1) {
          let c = value.split('#')[1]
          md += `| ${childKey} | ${value} | [![${value}](https://via.placeholder.com/32x16/${c}/000000?text=+)](https://www.colorhexa.com/${c}) |\n`
        } else {
          md += `| ${childKey} | ${value} | N/A | \n`
        }
      } else {
        md += `| ${childKey} | ${json[key][childKey]} |\n`
      }
    })

    md += `\n----\n`
  })

  return md
}
