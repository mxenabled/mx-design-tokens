import core from 'src/tokens/core/core'
import { targets } from 'src/index'

// Changes required everywhere except React Web
export const commonOverrides = {
  BoxShadow: { ...updateValues(core.BoxShadow, '') },
  Easing: {
    Default: {
      x1: 0.475,
      y1: 0.425,
      x2: 0,
      y2: 0.995,
    },
  },
}

// Changes required for tokens in React Native applications
export const reactNativeOverrides = {
  ...commonOverrides,
  Time: { ...addSuffix(core.Time, 'ms') },
}

// Changes required for tokens in Native applications
export const nativeOverrides = {
  ...commonOverrides,
  LineHeight: { ...removeSuffix(core.LineHeight, 'px') },
}

export const getTargetSpecificOverrides = (target) => {
  if (target === targets.REACT_NATIVE) {
    return reactNativeOverrides
  } else if (target === targets.NATIVE) {
    return nativeOverrides
  }

  // React Web shouldn't override any tokens
  return {}
}

function addSuffix(json, value = 'px') {
  let retValues = {}

  Object.keys(json).forEach(function (key) {
    retValues[key] = ''.concat(json[key], value)
  })

  return retValues
}

function removeSuffix(json, value = 'px', isNumeric = true) {
  let retValues = {}

  Object.keys(json).forEach(function (key) {
    if (json[key].slice(-value.length) === value) {
      const shortVal = json[key].slice(0, -value.length)
      const isNumeric = !isNaN(shortVal) && !isNaN(parseFloat(shortVal))

      retValues[key] = isNumeric ? parseFloat(shortVal) : shortVal
    }
  })

  return retValues
}

function updateValues(json, value = '') {
  let retValues = {}

  Object.keys(json).forEach(function (key) {
    retValues[key] = value
  })

  return retValues
}
