import core from 'src/tokens/core'

const light = {
  NeutralButton: core.Color.Neutral400,
  NeutralButtonHover: core.Color.Primary400,
  // NeutralButtonDisabled: core.Color.Neutral400,
  Input: core.Color.Neutral400,
  InputHover: core.Color.Neutral600,
  InputFocus: core.Color.Primary300,
  InputError: core.Color.Error300,
  InputDisabled: core.Color.TransparentNeutral400,
  LinkButtonHover: core.Color.Neutral400,
  Dropdown: core.Color.Neutral400,
  DropdownHover: core.Color.Neutral600,
  DropdownFocus: core.Color.Primary300,
  DropdownError: core.Color.Error300,
  DropdownDisabled: core.Color.TransparentNeutral400,
}

const dark = {
  ...light,
}

export default {
  light,
  dark,
}
