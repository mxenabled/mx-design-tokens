// test if value is a simple object {}
export const isObject = (value) => value && typeof value === 'object' && !Array.isArray(value)

// recursively merge two simple token objects (won't handle circular refs)
export const deepMerge = (target, source) => {
  let retValues = Object.assign({}, target)

  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(source[key])) {
        if (!(key in target)) {
          Object.assign(retValues, { [key]: source[key] })
        } else {
          retValues[key] = deepMerge(target[key], source[key])
        }
      } else {
        Object.assign(retValues, { [key]: source[key] })
      }
    })
  }

  return retValues
}

// is token part of core or a calculated leaf value
export const getTokenType = (token, core, leaf) => {
  let tokenType = 'new'
  const coreKeys = Object.keys(core)
  const leafKeys = Object.keys(leaf)

  coreKeys.map((rKey) => {
    if (token.hasOwnProperty(rKey)) {
      const subKeys = Object.keys(core[rKey])

      subKeys.map((sKey) => {
        if (token[rKey].hasOwnProperty(sKey)) {
          tokenType = token[rKey][sKey] === core[rKey][sKey] ? 'core-default' : 'core-updated'
        }
      })
    }
  })

  leafKeys.map((rKey) => {
    if (token.hasOwnProperty(rKey)) {
      const subKeys = Object.keys(leaf[rKey])

      subKeys.map((sKey) => {
        if (token[rKey].hasOwnProperty(sKey)) {
          tokenType = token[rKey][sKey] === leaf[rKey][sKey] ? 'leaf-default' : 'leaf-updated'
        }
      })
    }
  })

  return tokenType
}

// convert a single token object into an array of individual tokens
export const expandTokens = (tokens) => {
  let tokenList = []
  const rootEntries = Object.entries(tokens)

  rootEntries.map(([rKey, rVal]) => {
    const subEntries = Object.entries(rVal)

    subEntries.map(([sKey, sVal]) => {
      const singleToken = Object.fromEntries([[sKey, sVal]])

      tokenList.push(Object.fromEntries([[rKey, singleToken]]))
    })
  })

  return tokenList
}

// convert array of individual tokens into a single token object
export const collapseTokens = (tokenList) => {
  let retToken = {}

  tokenList.map((token) => (retToken = Object.assign({}, deepMerge(retToken, token))))

  return retToken
}

// split a token object into various partitions
export const splitTokens = (tokens, core, leaf) => {
  const partitionedLists = {
    defaultTokens: {
      core: [],
      leaf: [],
    },
    updatedTokens: {
      core: [],
      leaf: [],
      new: [],
    },
  }

  const tokenList = expandTokens(tokens)
  tokenList.map((token) => {
    const type = getTokenType(token, core, leaf)

    if (type === 'core-default') {
      partitionedLists.defaultTokens.core.push(token)
    } else if (type === 'core-updated') {
      partitionedLists.updatedTokens.core.push(token)
    } else if (type === 'leaf-default') {
      partitionedLists.defaultTokens.leaf.push(token)
    } else if (type === 'leaf-updated') {
      partitionedLists.updatedTokens.leaf.push(token)
    } else {
      partitionedLists.updatedTokens.new.push(token)
    }
  })

  return partitionedLists
}

// concatenate a `suffix` to each token value in `json`
// by default the suffix will be 'px'
export const addSuffix = (json, suffix = 'px') => {
  let retValues = {}

  Object.keys(json).forEach(function (key) {
    retValues[key] = ''.concat(json[key], suffix)
  })

  return Object.assign({}, json, retValues)
}

// remove a `suffix` like 'px' from each token value in `json`
// by default the resulting value is stored as a number
export const removeSuffix = (json, suffix = 'px', valueIsNumber = true) => {
  let retValues = {}

  Object.keys(json).forEach((key) => {
    if (json[key].slice(-suffix.length) === suffix) {
      const shortVal = json[key].slice(0, -suffix.length)
      const valueIsNumber = !isNaN(shortVal) && !isNaN(parseFloat(shortVal))

      retValues[key] = valueIsNumber ? parseFloat(shortVal) : shortVal
    }
  })

  return Object.assign({}, json, retValues)
}

// overwrite everything in `json` with a hardcoded `value`
// by default the values will be reset to empty string
export const updateValues = (json, value = '') => {
  let retValues = {}

  Object.keys(json).forEach(function (key) {
    retValues[key] = isObject(value) ? Object.assign({}, retValues, value) : value
  })

  return Object.assign({}, json, retValues)
}
