import core from 'src/tokens/core'

const light = {
  Default: core.Colors.Neutral900,
  Secondary: core.Colors.Neutral700,
  Active: core.Colors.Primary300,
  ActiveHover: core.Colors.Primary400,
  Error: core.Colors.Error300,
  Disabled: core.Colors.Neutral600,
  InputPlaceholder: core.Colors.Neutral600,
  LinkButton: core.Colors.Primary300,
  LinkButtonHover: core.Colors.Primary400,
  PrimaryButton: core.Colors.NeutralWhite,
  PrimaryButtonDisabled: core.Colors.Neutral500,
  NeutralButton: core.Colors.Primary300,
  NeutralButtonHover: core.Colors.Primary400,
  NeutralButtonDisabled: core.Colors.Primary600,
  TransparentButton: core.Colors.Primary300,
  TransparentHover: core.Colors.Primary400,
  TransparentButtonDisabled: core.Colors.Primary600,
}

const dark = {
  ...light,
}

export default {
  light,
  dark,
}
