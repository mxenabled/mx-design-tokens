import core from './core'
import { applyTargetModifications } from './mods'
import { collapseTokens, deepMerge, splitTokens } from './utils'

import backgroundColor from './tokens/backgroundColor'
import borderColor from './tokens/borderColor'
import borderRadius from './tokens/borderRadius'
import boxShadow from './tokens/boxShadow'
import fontSize from './tokens/fontSize'
import spacing from './tokens/spacing'
import textColor from './tokens/textColor'
import zIndex from './tokens/zIndex'

import type { TokenTypes } from './TokenTypes'

export {
  BackgroundColorType,
  BorderColorType,
  BorderRadiusType,
  BoxShadowType,
  ColorType,
  EasingType,
  FontSizeType,
  FontType,
  FontWeightType,
  LetterSpacingType,
  LineHeightType,
  MediaQueryType,
  ResolutionType,
  SpacingType,
  TextColorType,
  TimeType,
  TokenTypes,
  ZIndexType
} from './TokenTypes'

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
  FontSize: theme === themes.LIGHT ? fontSize.light(base) : fontSize.dark(base),
  Spacing: theme === themes.LIGHT ? spacing.light(base) : spacing.dark(base),
  TextColor: theme === themes.LIGHT ? textColor.light(base) : textColor.dark(base),
  ZIndex: theme === themes.LIGHT ? zIndex.light(base) : zIndex.dark(base)
} as TokenTypes)

export const buildTheme = (theme = themes.LIGHT, target = targets.REACT, tokenOverrides = {}): TokenTypes => {
  // core token changes propagate down
  const baseCore: TokenTypes = Object.assign({}, core)
  const baseLeaf: TokenTypes = getSectionTokens(theme)
  const baseParts = splitTokens(tokenOverrides, baseCore, baseLeaf)

  const updatedCore = collapseTokens(baseParts.updatedTokens.core)
  const mergedCore = deepMerge(baseCore, updatedCore)

  const customCore: TokenTypes = applyTargetModifications(target, mergedCore)
  const customLeaf: TokenTypes = getSectionTokens(theme, customCore)
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

  return deepMerge(customBoth, mergedLeaf) as TokenTypes
}

export const light = buildTheme(themes.LIGHT)
export const dark = buildTheme(themes.DARK)
