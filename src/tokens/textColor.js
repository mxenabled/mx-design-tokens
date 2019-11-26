import core from 'src/tokens/core'

const light = {
  Default: core.Color.Neutral900,
  Secondary: core.Color.Neutral700,
  Active: core.Color.Primary300,
  ActiveHover: core.Color.Primary400,
  Error: core.Color.Error300,
  Disabled: core.Color.Neutral600,
  InputPlaceholder: core.Color.Neutral600,
  LinkButton: core.Color.Primary300,
  LinkButtonHover: core.Color.Primary400,
  PrimaryButton: core.Color.NeutralWhite,
  PrimaryButtonDisabled: core.Color.Neutral500,
  NeutralButton: core.Color.Primary300,
  NeutralButtonHover: core.Color.Primary400,
  NeutralButtonDisabled: core.Color.Primary600,
  TransparentButton: core.Color.Primary300,
  TransparentHover: core.Color.Primary400,
  TransparentButtonDisabled: core.Color.Primary600,
}

const dark = {
  ...light,
}

export default {
  light,
  dark,
}
