const p = require('path')
const fs = require('fs')
const readJson = (jsonFile) => JSON.parse(fileRead(jsonFile))

function getSassContent(jsonFile) {
  let sass = ''
  const json = readJson(jsonFile)
  const keys = Object.keys(json)

  for (let i = 0; i < keys.length; i++) {
    const k = keys[i]
    const values = json[k]
    const props = Object.keys(values)

    sass += `$${k}: (\n`

    for (let j = 0; j < props.length; j++) {
      const p = props[j]
      const v = formatValue(values[p], k)

      sass += `  "${p}": ${v},\n`
    }

    sass += `);\n`
  }

  return sass
}

function formatValue(val, token) {
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

function main() {
  console.log(`GENERATING SASS FILES...`)
  fileOverwrite('../scss/light.scss', getSassContent('../json/light.json'))
  fileOverwrite('../scss/dark.scss', getSassContent('../json/dark.json'))
}

main()

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

// write `content` to `path` (overwriting if it exists)
function fileOverwrite(path, content) {
  ensureDirectoryExists(path)
  fs.writeFile(path, content, { flag: 'w' }, (err) => {
    if (err) {
      console.error(`ERROR: Failed to write file '${path}'`)
      console.log(err)
    } else {
      console.log(`SUCCESSS: Generated the file '${path}' (${content.length} bytes)`)
    }
  })
}
