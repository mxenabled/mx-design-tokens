const f = require('./helpers/file')
const t = require('./helpers/theme')

console.log(`GENERATING FILES:  mx-design-tokens -> docs/tokens.md`)

f.fileOverwrite(`../docs/tokens.md`, getDocsContent(t.themeList.light))

// get markdown text from a theme object
function getDocsContent(json) {
  let md = ''
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
          md += `| ${childKey} | ${value} | ![${value}](http://placehold.it/15/${
            value.split('#')[1]
          }/000000?text=+) |\n`
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
