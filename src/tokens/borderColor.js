const light = core => ({
  NeutralButton: core.Color.Neutral400,
  NeutralButtonHover: core.Color.Primary400,
  Input: core.Color.Neutral400,
  InputHover: core.Color.Neutral600,
  InputFocus: core.Color.Primary300,
  InputError: core.Color.Error300,
  InputDisabled: core.Color.TransparentNeutral400,
  LinkButtonHover: core.Color.Primary400,
  Dropdown: core.Color.Neutral400,
  DropdownHover: core.Color.Neutral600,
  DropdownFocus: core.Color.Primary300,
  DropdownError: core.Color.Error300,
  DropdownDisabled: core.Color.TransparentNeutral400,
  TabHover: core.Color.Primary200,
})

const dark = core => ({
  ...light(core),
})

export default {
  light,
  dark,
}
