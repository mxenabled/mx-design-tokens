import { LetterSpacingType } from '../TokenType'

const light = () => ({
  SmallUppercase: -0.52,
  TinyUppercase: 0.33,
  XSmallUppercase: 0.33,
} as LetterSpacingType)

const dark = () => ({
  ...light(),
} as LetterSpacingType)

export default {
  light,
  dark,
}
