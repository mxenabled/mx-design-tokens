import core from 'src/core'
import { addSuffix, removeSuffix, updateValues } from 'src/utils'
import { targets } from 'src/index'

// Shared modifications
const updatedBoxShadow = updateValues(core.BoxShadow, '')
const updatedEasing = updateValues(core.Easing, {
  x1: 0.475,
  y1: 0.425,
  x2: 0,
  y2: 0.995,
})

// React Native modifications
const updatedTime = addSuffix(core.Time, 'ms')

// Native modifications
const updatedLineHeight = removeSuffix(core.LineHeight, 'px')

export const applyTargetModifications = (target = targets.REACT, coreTokens = core) => {
  let modifiedTokens = coreTokens

  if (target === targets.REACT) {
    const reactWebTokenMods = [coreTokens]

    modifiedTokens = Object.assign({}, ...reactWebTokenMods)
  } else if (target === targets.REACT_NATIVE) {
    const reactNativeTokenMods = [coreTokens, updatedBoxShadow, updatedEasing, updatedTime]

    modifiedTokens = Object.assign({}, ...reactNativeTokenMods)
  } else if (target === targets.NATIVE) {
    const nativeTokenMods = [coreTokens, updatedBoxShadow, updatedEasing, updatedLineHeight]

    modifiedTokens = Object.assign({}, ...nativeTokenMods)
  } else {
    console.error(`ERROR: applyTargetModifications unknown target [${target}]`)
  }

  return modifiedTokens
}
