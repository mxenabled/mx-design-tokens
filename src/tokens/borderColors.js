import core from 'src/tokens/core'

const light = {
  NeutralButton: core.Colors.Neutral400,
  NeutralButtonHover: core.Colors.Primary400,
  // NeutralButtonDisabled: core.Colors.Neutral400,
  Input: core.Colors.Neutral400,
  InputHover: core.Colors.Neutral600,
  InputFocus: core.Colors.Primary300,
  InputError: core.Colors.Error300,
  InputDisabled: core.Colors.TransparentNeutral400,
  LinkButtonHover: core.Colors.Neutral400,
  Dropdown: core.Colors.Neutral400,
  DropdownHover: core.Colors.Neutral600,
  DropdownFocus: core.Colors.Primary300,
  DropdownError: core.Colors.Error300,
  DropdownDisabled: core.Colors.TransparentNeutral400,
}

const dark = {
  ...light,
}

export default {
  light,
  dark,
}
