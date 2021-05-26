const p = require('path')
const fs = require('fs')

// read contents of file in `path`
function fileRead(path) {
  const lines = []

  try {
    const contents = fs.readFileSync(path, 'utf-8').split(/\r?\n/)

    contents.forEach(function (line) {
      lines.push(line)
    })
  } catch (err) {
    console.error(`ERROR: reading file '${path}'`)
    console.log(err)
  }

  return lines
}

// write `content` to `path` (overwriting if it exists)
function fileOverwrite(path, content) {
  ensureDirectoryExists(path)
  fs.writeFile(path, content, { flag: 'w' }, (err) => {
    if (err) {
      console.error(`ERROR: Failed to write file '${path}'`)
      console.log(err)
    } else {
      console.log(
        `\x1b[32mSUCCESSS: Generated file \x1b[37m'${path}' \x1b[35m(${content.length} bytes)\x1b[0m`,
      )
    }
  })
}

// recursively make sure `path` exists otherwise create it
function ensureDirectoryExists(path) {
  const dirname = p.dirname(path)

  if (fs.existsSync(dirname)) {
    return 1
  }

  ensureDirectoryExists(dirname)
  fs.mkdirSync(dirname)

  return 0
}

exports.ensureDirectoryExists = ensureDirectoryExists
exports.fileRead = fileRead
exports.fileOverwrite = fileOverwrite
