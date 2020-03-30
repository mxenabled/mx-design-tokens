const light = core => ({
  Body: core.Color.Neutral100,
  // Button
  ButtonLinkHover: core.Color.Primary100,
  ButtonPrimary: core.Color.Primary300,
  ButtonPrimaryHover: core.Color.Primary400,
  ButtonPrimaryDisabled: core.Color.Neutral200,
  ButtonNeutral: core.Color.NeutralWhite,
  ButtonNeutralHover: core.Color.NeutralWhite,
  ButtonNeutralDisabled: core.Color.NeutralWhite,
  ButtonTransparentHover: core.Color.Primary100,
  ButtonDestructive: core.Color.Error300,
  ButtonDestructiveHover: core.Color.Error400,
  ButtonDestructiveDisabled: core.Color.Neutral200,
  // Input
  InputFocus: "transparent",
  InputDisabled: core.Color.TransparentNeutral100,
  InputLabelDefault: core.Color.NeutralWhite,
  InputLabelSecondary: core.Color.Neutral100,
  InputChip: core.Color.Primary100,
  InputChipHover: core.Color.Primary300,
  // Modal
  Modal: core.Color.NeutralWhite,
  ModalScrim: core.Color.TransparentScrim,
  ModalClose: core.Color.Neutral200,
  // Container
  Container: core.Color.NeutralWhite,
  // Card
  Card: core.Color.NeutralWhite,
  // Left Nav
  LeftNavItem: core.Color.NeutralWhite,
  LeftNavItemHover: core.Color.Neutral100,
  LeftNavItemActive: core.Color.Primary100,
  // Tab
  TabHover: core.Color.Neutral100,
  // HR
  HrLight: core.Color.Neutral300,
  HrDark: core.Color.Neutral400,
  // Switch
  SwitchOff: core.Color.Neutral200,
  SwitchOn: core.Color.Success300,
  SwitchDisabledOff: core.Color.Neutral200,
  SwitchDisabledOn: core.Color.Neutral300,
  SwitchHandle: core.Color.NeutralWhite,
  SwitchHandleDisabled: core.Color.Neutral100,
  // Tooltip
  Tooltip: core.Color.Neutral800,
  // Checkbox
  CheckboxChecked: core.Color.Primary100,
  CheckboxDisabled: core.Color.Neutral100,
  // Radio
  RadioChecked: core.Color.Primary100,
  RadioDisabled: core.Color.Primary100,
  RadioDot: core.Color.Neutral100,
  RadioDotChecked: core.Color.Primary300,
  RadioDotDisabled: core.Color.Neutral200,
  RadioDotDisabledChecked: core.Color.Neutral500,
  // Dropdown
  DropdownMenu: core.Color.NeutralWhite,
  DropdownMenuItemHover: core.Color.Neutral100,
  DropdownMenuItemActive: core.Color.Primary100,
})

const dark = core => ({
  ...light(core),
  Body: core.Color.Neutral900,
  // Button
  ButtonLinkHover: core.Color.Neutral700,
  ButtonPrimaryDisabled: core.Color.Neutral700,
  ButtonNeutral: core.Color.Neutral800,
  ButtonNeutralHover: core.Color.Neutral600,
  ButtonNeutralDisabled: core.Color.Neutral700,
  ButtonTransparentHover: core.Color.Neutral600,
  ButtonDestructiveDisabled: core.Color.Neutral700,
  // Input
  InputFocus: "transparent",
  InputDisabled: 'transparent',
  InputLabelDefault: core.Color.Neutral800,
  InputLabelSecondary: core.Color.Neutral900,
  InputChip: core.Color.Neutral700,
  InputChipHover: core.Color.Neutral600,
  // Modal
  Modal: core.Color.Neutral800,
  ModalScrim: core.Color.TransparentScrimDarker,
  ModalClose: core.Color.Neutral700,
  // Container
  Container: core.Color.Neutral800,
  // Card
  Card: core.Color.Neutral800,
  // Left Nav
  LeftNavItem: core.Color.Neutral800,
  LeftNavItemHover: core.Color.Neutral700,
  LeftNavItemActive: core.Color.Neutral900,
  // Tab
  TabHover: core.Color.Neutral700,
  // HR
  HrLight: core.Color.Neutral600,
  HrDark: core.Color.Neutral500,
  // Switch
  SwitchOff: core.Color.Neutral700,
  SwitchDisabledOff: core.Color.Neutral900,
  SwitchDisabledOn: core.Color.Neutral900,
  SwitchHandle: core.Color.NeutralWhite,
  SwitchHandleDisabled: core.Color.Neutral700,
  // Tooltip
  Tooltip: core.Color.Neutral700,
  // Checkbox
  CheckboxChecked: 'transparent',
  CheckboxDisabled: core.Color.Neutral700,
  // Radio
  RadioChecked: 'transparent',
  RadioDisabled: core.Color.Neutral700,
  RadioDot: core.Color.Neutral600,
  RadioDotChecked: core.Color.NeutralWhite,
  RadioDotDisabled: core.Color.Neutral600,
  // Dropdown
  DropdownMenu: core.Color.Neutral700,
  DropdownMenuItemHover: core.Color.Neutral600,
  DropdownMenuItemActive: core.Color.Primary600,
})

export default {
  light,
  dark,
}
