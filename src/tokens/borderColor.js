const light = core => ({
  // Button
  ButtonLinkHover: core.Color.Primary400,
  ButtonNeutral: core.Color.Neutral400,
  ButtonNeutralDisabled: core.Color.Primary400,
  ButtonNeutralHover: core.Color.Primary400,
  // Checkbox
  Checkbox: core.Color.Neutral600,
  CheckboxChecked: core.Color.Primary300,
  CheckboxDisabled: core.Color.Neutral400,
  // Dropdown
  DropdownDisabled: core.Color.TransparentNeutral400,
  // Input
  Input: core.Color.Neutral600,
  InputDisabled: core.Color.TransparentNeutral400,
  InputError: core.Color.Error300,
  InputFocus: core.Color.Primary300,
  InputHover: core.Color.Neutral600,
  // Radio
  Radio: core.Color.Neutral600,
  RadioChecked: core.Color.Primary300,
  RadioDisabled: core.Color.Neutral400,
  RadioDisabledChecked: core.Color.Neutral500,
  // Switch
  Switch: core.Color.Neutral600,
  SwitchDisabled: core.Color.Neutral400,
  // Tab
  TabActive: core.Color.Primary300,
})

const dark = core => ({
  ...light(core),
  // Button
  ButtonLinkHover: core.Color.NeutralWhite,
  ButtonNeutral: core.Color.Neutral500,
  ButtonNeutralDisabled: core.Color.Neutral600,
  ButtonNeutralHover: core.Color.Neutral500,
  // Checkbox
  Checkbox: core.Color.Neutral400,
  CheckboxChecked: core.Color.NeutralWhite,
  CheckboxDisabled: core.Color.Neutral600,
  // Input
  Input: core.Color.Neutral500,
  InputDisabled: core.Color.Neutral600,
  InputError: core.Color.Error200,
  InputFocus: core.Color.Primary200,
  InputHover: core.Color.Neutral500,
  // Radio
  RadioChecked: core.Color.NeutralWhite,
  RadioDisabled: core.Color.Neutral600,
  // Switch
  SwitchDisabled: core.Color.Neutral600,
  // Tab
  TabActive: core.Color.Primary200,
})

export default {
  light,
  dark,
}
