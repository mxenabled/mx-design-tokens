import core from 'src/core'

// test if value is a simple object {}
export const isObject = (value) => value && typeof value === 'object' && !Array.isArray(value)

// recursively merge two simple token objects (won't handle circular refs)
export const deepMerge = (target, source) => {
  let retValues = Object.assign({}, target)

  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(source[key])) {
        if (!(key in target)) Object.assign(retValues, { [key]: source[key] })
        else retValues[key] = deepMerge(target[key], source[key])
      } else {
        Object.assign(retValues, { [key]: source[key] })
      }
    })
  }

  return retValues
}

// test if a token is defined in core.js
export const getTokenType = (fullToken) => {
  let tokenType = 'new'
  const rootKeys = Object.keys(core)

  rootKeys.map((rKey) => {
    if (fullToken.hasOwnProperty(rKey)) {
      const subKeys = Object.keys(core[rKey])

      subKeys.map((sKey) => {
        if (fullToken[rKey].hasOwnProperty(sKey)) {
          tokenType = 'core'
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
// convert array of individual tokens into a single token object
export const collapseTokens = (tokenList) => {
  let retToken = {}

  tokenList.map((token) => (retToken = Object.assign({}, deepMerge(retToken, token))))

  return retToken
}

// divide tokenList into separate token arrays based on type
// coreTokens, newTokensAdded, leafTokensDefault, leafTokensChanged
export const splitTokens = (tokenList) => {
  let coreTokens = []
  let newTokensAdded = []
  let leafTokensDefault = []
  let leafTokensChanged = []

  tokenList.map((token) => {
    const type = getTokenType(token)

    if (type === 'core') {
      coreTokens.push(token)
    } else if (type === 'leaf-default') {
      leafTokensDefault.push(token)
    } else if (type === 'leaf-changed') {
      leafTokensDefault.push(token)
    } else {
      newTokensAdded.push(token)
    }
  })

  return {
    coreTokens,
    leafTokensChanged,
    leafTokensDefault,
    newTokensAdded,
  }
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
