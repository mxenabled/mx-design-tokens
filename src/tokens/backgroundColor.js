import core from 'src/tokens/core'

const light = {
  LinkButtonHover: core.Color.Primary100,
  PrimaryButton: core.Color.Primary300,
  PrimaryButtonHover: core.Color.Primary400,
  PrimaryButtonDisabled: core.Color.Neutral200,
  NeutralButton: core.Color.NeutralWhite,
  TransparentButtonHover: core.Color.Primary100,
  TransparentButtonDisabled: core.Color.Neutral600,
  Input: core.Color.Neutral100,
  InputFocus: core.Color.NeutralWhite,
  InputDisabled: core.Color.TransparentNeutral100,
  Modal: core.Color.NeutralWhite,
  Body: core.Color.Neutral100,
  Container: core.Color.NeutralWhite,
  Card: core.Color.NeutralWhite,
}

const dark = {
  ...light,
}

export default {
  light,
  dark,
}
