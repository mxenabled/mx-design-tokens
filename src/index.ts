import core from './core'
import { applyTargetModifications } from './mods'
import { collapseTokens, deepMerge, splitTokens } from './utils'

import backgroundColor from './tokens/backgroundColor'
import borderColor from './tokens/borderColor'
import borderRadius from './tokens/borderRadius'
import boxShadow from './tokens/boxShadow'
import letterSpacing from './tokens/letterSpacing'
import fontSize from './tokens/fontSize'
import spacing from './tokens/spacing'
import textColor from './tokens/textColor'
import zIndex from './tokens/zIndex'
import type { TokenType } from './TokenType'

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
  BackgroundColor: theme === themes.LIGHT ? backgroundColor.light(base) : backgroundColor.dark(base),
  BorderColor: theme === themes.LIGHT ? borderColor.light(base) : borderColor.dark(base),
  BorderRadius: theme === themes.LIGHT ? borderRadius.light(base) : borderRadius.dark(base),
  BoxShadow: theme === themes.LIGHT ? boxShadow.light(base) : boxShadow.dark(base),
  LetterSpacing: theme === themes.LIGHT ? letterSpacing.light() : letterSpacing.dark(),
  FontSize: theme === themes.LIGHT ? fontSize.light(base) : fontSize.dark(base),
  Spacing: theme === themes.LIGHT ? spacing.light(base) : spacing.dark(base),
  TextColor: theme === themes.LIGHT ? textColor.light(base) : textColor.dark(base),
  ZIndex: theme === themes.LIGHT ? zIndex.light(base) : zIndex.dark(base)
} as TokenType)

export const buildTheme = (theme = themes.LIGHT, target = targets.REACT, tokenOverrides = {}) => {
  // core token changes propagate down
  const baseCore: TokenType = Object.assign({}, core)
  const baseLeaf: TokenType = getSectionTokens(theme)
  const baseParts = splitTokens(tokenOverrides, baseCore, baseLeaf)

  const updatedCore = collapseTokens(baseParts.updatedTokens.core)
  const mergedCore = deepMerge(baseCore, updatedCore)

  const customCore: TokenType = applyTargetModifications(target, mergedCore)
  const customLeaf: TokenType = getSectionTokens(theme, customCore)
  const customBoth = deepMerge(customCore, customLeaf)

  // leaf token changes take priority over core token changes
  let mergedLeaf = {}

  const leafChanges = baseParts.updatedTokens.leaf
  leafChanges.map((l: any) => {
    mergedLeaf = deepMerge(mergedLeaf, l)
  })

  const newChanges = baseParts.updatedTokens.new
  newChanges.map((n: any) => {
    mergedLeaf = deepMerge(mergedLeaf, n)
  })

  return deepMerge(customBoth, mergedLeaf) as TokenType
}

export const light = buildTheme(themes.LIGHT)
export const dark = buildTheme(themes.DARK)
