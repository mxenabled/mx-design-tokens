import core from 'src/core'
import { deepMerge, addSuffix, removeSuffix, updateValues } from 'src/utils'
import { targets } from 'src/index'

// Target Specific Modifications

// Shared
const updatedBoxShadow = updateValues(core.BoxShadow, '')
const updatedEasing = updateValues(core.Easing, {
  x1: 0.475,
  y1: 0.425,
  x2: 0,
  y2: 0.995,
})

// React Native
const updatedTime = addSuffix(core.Time, 'ms')

// Native
const updatedLineHeight = removeSuffix(core.LineHeight, 'px')

export const getTargetSpecificTokens = (target, tokenOverrides) => {
  const coreTokens = deepMerge(core, tokenOverrides)

  const reactNativeTokens = Object.assign(
    {},
    coreTokens,
    updatedBoxShadow,
    updatedEasing,
    updatedTime,
  )

  const nativeTokens = Object.assign(
    {},
    coreTokens,
    updatedBoxShadow,
    updatedEasing,
    updatedLineHeight,
  )

  if (target === targets.REACT_NATIVE) {
    return reactNativeTokens
  } else if (target === targets.NATIVE) {
    return nativeTokens
  } else {
    return coreTokens
  }
}
