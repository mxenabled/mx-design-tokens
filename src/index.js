import core from 'src/core'
import { applyTargetModifications } from 'src/mods'
import { collapseTokens, deepMerge, splitTokens } from 'src/utils'

import backgroundColor from 'src/tokens/backgroundColor'
import borderColor from 'src/tokens/borderColor'
import borderRadius from 'src/tokens/borderRadius'
import boxShadow from 'src/tokens/boxShadow'
import letterSpacing from 'src/tokens/letterSpacing'
import fontSize from 'src/tokens/fontSize'
import spacing from 'src/tokens/spacing'
import textColor from 'src/tokens/textColor'
import zIndex from 'src/tokens/zIndex'

export const targets = {
  REACT: 'react',
  REACT_NATIVE: 'react_native',
  NATIVE: 'native',
}

export const themes = {
  LIGHT: 'light',
  DARK: 'dark',
}

const getSectionTokens = (theme = themes.LIGHT, base = core) => ({
  BackgroundColor: backgroundColor[theme](base),
  BorderColor: borderColor[theme](base),
  BorderRadius: borderRadius[theme](base),
  BoxShadow: boxShadow[theme](base),
  LetterSpacing: letterSpacing[theme](base),
  FontSize: fontSize[theme](base),
  Spacing: spacing[theme](base),
  TextColor: textColor[theme](base),
  ZIndex: zIndex[theme](base),
})

export const buildTheme = (theme = themes.LIGHT, target = targets.REACT, tokenOverrides = {}) => {
  // core token changes propigate down
  const baseCore = Object.assign({}, core)
  const baseLeaf = getSectionTokens(theme)
  const baseParts = splitTokens(tokenOverrides, baseCore, baseLeaf)

  const updatedCore = collapseTokens(baseParts.updatedTokens.core)
  const mergedCore = deepMerge(baseCore, updatedCore)

  const customCore = applyTargetModifications(target, mergedCore)
  const customLeaf = getSectionTokens(theme, customCore)
  const customBoth = deepMerge(customCore, customLeaf)

  // leaf token changes take priority over core token changes
  let mergedLeaf = {}

  const leafChanges = baseParts.updatedTokens.leaf
  leafChanges.map((l) => {
    mergedLeaf = deepMerge(mergedLeaf, l)
  })

  const newChanges = baseParts.updatedTokens.new
  newChanges.map((n) => {
    mergedLeaf = deepMerge(mergedLeaf, n)
  })

  const builtTokens = deepMerge(customBoth, mergedLeaf)

  return builtTokens
}

export const light = buildTheme(themes.LIGHT)
export const dark = buildTheme(themes.DARK)
