import core from 'src/tokens/core'

const light = {
  LinkButtonHover: core.Colors.Primary100,
  PrimaryButton: core.Colors.Primary300,
  PrimaryButtonHover: core.Colors.Primary400,
  PrimaryButtonDisabled: core.Colors.Neutral200,
  NeutralButton: core.Colors.NeutralWhite,
  TransparentButtonHover: core.Colors.Primary100,
  TransparentButtonDisabled: core.Colors.Neutral600,
  Input: core.Colors.Neutral100,
  InputFocus: core.Colors.NeutralWhite,
  InputDisabled: core.Colors.TransparentNeutral100,
  Modal: core.Colors.NeutralWhite,
}

const dark = {
  ...light
}

export default {
  light,
  dark,
}
