const light = core => ({
  // Button
  ButtonLinkHover: core.Color.Brand400,
  ButtonLinkDestructiveHover: core.Color.Error400,
  ButtonNeutral: core.Color.Neutral400,
  ButtonNeutralDisabled: core.Color.Brand400,
  ButtonNeutralHover: core.Color.Brand400,
  // Checkbox
  Checkbox: core.Color.Neutral600,
  CheckboxChecked: core.Color.Brand300,
  CheckboxDisabled: core.Color.Neutral400,
  //Chip
  ChipDefault: core.Color.Neutral600,
  ChipDefaultHover: core.Color.Neutral300,
  ChipDefaultActive: core.Color.Brand100,
  ChipDefaultDisabled: core.Color.Neutral500,
  // Dropdown
  DropdownDisabled: core.Color.TransparentNeutral400,
  // Input
  Input: core.Color.Neutral600,
  InputDisabled: core.Color.TransparentNeutral400,
  InputError: core.Color.Error300,
  InputFocus: core.Color.Brand300,
  InputHover: core.Color.Neutral600,
  // Radio
  Radio: core.Color.Neutral600,
  RadioChecked: core.Color.Brand300,
  RadioDisabled: core.Color.Neutral400,
  RadioDisabledChecked: core.Color.Neutral500,
  // Switch
  Switch: core.Color.Neutral600,
  SwitchDisabled: core.Color.Neutral400,
  // Tab
  TabActive: core.Color.Brand300,
  // Table
  TableHeader: core.Color.Neutral400,
  TableCell: core.Color.Neutral200,
})

const dark = core => ({
  ...light(core),
  // Button
  ButtonLinkHover: core.Color.NeutralWhite,
  ButtonLinkDestructiveHover: core.Color.NeutralWhite,
  ButtonNeutral: core.Color.Neutral500,
  ButtonNeutralDisabled: core.Color.Neutral600,
  ButtonNeutralHover: core.Color.Neutral500,
  // Checkbox
  Checkbox: core.Color.Neutral400,
  CheckboxChecked: core.Color.NeutralWhite,
  CheckboxDisabled: core.Color.Neutral600,
  //Chip
  ChipDefault: core.Color.Neutral500,
  ChipDefaultHover: core.Color.Neutral600,
  ChipDefaultActive: core.Color.Brand200,
  ChipDefaultDisabled: core.Color.Neutral600,
  // Input
  Input: core.Color.Neutral500,
  InputDisabled: core.Color.Neutral600,
  InputError: core.Color.Error200,
  InputFocus: core.Color.Brand200,
  InputHover: core.Color.Neutral500,
  // Radio
  RadioChecked: core.Color.NeutralWhite,
  RadioDisabled: core.Color.Neutral600,
  // Switch
  SwitchDisabled: core.Color.Neutral600,
  // Tab
  TabActive: core.Color.Brand200,
  // Table
  TableHeader: core.Color.Neutral600,
  TableCell: core.Color.Neutral700,
})

export default {
  light,
  dark,
}
