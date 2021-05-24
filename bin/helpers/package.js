const f = require('./file')

const lines = f.fileRead('../package.json')
const content = lines.join('')
const packageJson = JSON.parse(content)

const packageInfo = {
  name: packageJson.name || 'unknown',
  url: packageJson.repository.url || 'unknown',
  version: packageJson.version || 'unknown',
}

function getHeaderComment(file, output) {
  return `/*
** ${packageInfo.name} (${packageInfo.version})
** ${output || ''} auto-generated from ${packageInfo.url} to ${file || ''}
*/
`
}

exports.packageInfo = packageInfo
exports.getHeaderComment = getHeaderComment
