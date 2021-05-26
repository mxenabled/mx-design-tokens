const f = require('./file')

const lines = f.fileRead('../package.json')
const content = lines.join('')
const packageJson = JSON.parse(content)

const packageInfo = {
  name: packageJson.name || 'unknown',
  url: packageJson.repository.url || 'unknown',
  version: packageJson.version || 'unknown',
}

function logStart(outputType) {
  const lblText = `\x1b[34mGENERATE:\x1b[0m`
  const pkgText = `\x1b[36m${packageInfo.name} (${packageInfo.version})\x1b[0m\n`
  const outText = `\x1b[30m\x1b[46m${outputType}\x1b[0m \x1b[34mfrom`

  console.log(`${lblText} ${outText} ${pkgText}`)
}

function getTimestamp() {
  const pad = (n, s = 2) => `${new Array(s).fill(0)}${n}`.slice(-s)
  const d = new Date()
  const dateparts = [pad(d.getFullYear(), 4), pad(d.getMonth() + 1), pad(d.getDate())]
  // const timeparts = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())]

  return `${dateparts.join('-')}`
}

function getHeaderComment(file, output, generated) {
  const onText = generated ? `on ${generated}` : ''
  const toText = file ? `to ${file}` : ''
  const fromText = packageInfo.url ? `from ${packageInfo.url}` : ''
  const lineOne = `/*\n** ${packageInfo.name} (${packageInfo.version})\n**`
  const lineTwo = `\n** ${output} auto-generated ${onText}`
  const lineThree = `\n** ${fromText} ${toText}\n*/\n`

  return lineOne + lineTwo + lineThree
}

exports.packageInfo = packageInfo
exports.logStart = logStart
exports.getHeaderComment = getHeaderComment
exports.getTimestamp = getTimestamp
