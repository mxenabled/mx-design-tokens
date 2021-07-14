const light = (core) => ({
  SmallUppercase: core.LetterSpacing.Uppercase,
  TinyUppercase: core.LetterSpacing.Uppercase,
  XSmallUppercase: core.LetterSpacing.Uppercase,
})

const dark = (core) => ({
  ...light(core),
})

export default {
  light,
  dark,
}
