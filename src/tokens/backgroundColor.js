const light = core => ({
  // Global
  Body: core.Color.Neutral100,
  //Avatar
  Avatar: core.Color.Neutral300, 
  // Button
  ButtonDestructive: core.Color.Error300,
  ButtonDestructiveDisabled: core.Color.Neutral200,
  ButtonDestructiveHover: core.Color.Error400,
  ButtonLinkHover: core.Color.Primary100,
  ButtonNeutral: core.Color.NeutralWhite,
  ButtonNeutralDisabled: core.Color.NeutralWhite,
  ButtonNeutralHover: core.Color.NeutralWhite,
  ButtonPrimary: core.Color.Primary300,
  ButtonPrimaryDisabled: core.Color.Neutral200,
  ButtonPrimaryHover: core.Color.Primary400,
  ButtonTransparentHover: core.Color.Primary100,
  // Card
  Card: core.Color.NeutralWhite,
  //Checkbox
  CheckboxChecked: core.Color.Primary100,
  CheckboxDisabled: core.Color.Neutral100,
  //Container
  Container: core.Color.NeutralWhite,
  // Dropdown
  DropdownMenu: core.Color.NeutralWhite,
  DropdownMenuItemActive: core.Color.Primary100,
  DropdownMenuItemHover: core.Color.Neutral100,
  // HR
  HrDark: core.Color.Neutral400,
  HrLight: core.Color.Neutral300,
  // Input
  InputChip: core.Color.Primary100,
  InputChipHover: core.Color.Primary300,
  InputDisabled: core.Color.TransparentNeutral100,
  InputFocus: "transparent",
  InputLabelDefault: core.Color.NeutralWhite,
  InputLabelSecondary: core.Color.Neutral100,
  // Left Nav
  LeftNavItem: core.Color.NeutralWhite,
  LeftNavItemActive: core.Color.Primary100,
  LeftNavItemHover: core.Color.Neutral100,
  // Modal
  Modal: core.Color.NeutralWhite,
  ModalClose: core.Color.Neutral200,
  ModalScrim: core.Color.TransparentScrim,
  // Radio
  RadioChecked: core.Color.Primary100,
  RadioDisabled: core.Color.Primary100,
  RadioDot: core.Color.Neutral100,
  RadioDotChecked: core.Color.Primary300,
  RadioDotDisabled: core.Color.Neutral200,
  RadioDotDisabledChecked: core.Color.Neutral500,
  //Switch
  SwitchDisabledOff: core.Color.Neutral200,
  SwitchDisabledOn: core.Color.Neutral300,
  SwitchHandle: core.Color.NeutralWhite,
  SwitchHandleDisabled: core.Color.Neutral100,
  SwitchOff: core.Color.Neutral200,
  SwitchOn: core.Color.Success300,
  // Tab
  TabHover: core.Color.Neutral100,
  // Table
  TableRowHover: core.Color.Neutral100,
  TableFooter: core.Color.Neutral200,
  //Tooltip
  Tooltip: core.Color.Neutral800,
})

const dark = core => ({
  ...light(core),
  // Global
  Body: core.Color.Neutral900,
  //Avatar
  Avatar: core.Color.Neutral700,
  // Button
  ButtonDestructiveDisabled: core.Color.Neutral700,
  ButtonLinkHover: core.Color.Neutral700,
  ButtonNeutral: core.Color.Neutral800,
  ButtonNeutralDisabled: core.Color.Neutral700,
  ButtonNeutralHover: core.Color.Neutral600,
  ButtonPrimaryDisabled: core.Color.Neutral700,
  ButtonTransparentHover: core.Color.Neutral600,
  // Card
  Card: core.Color.Neutral800,
  // Checkbox
  CheckboxChecked: 'transparent',
  CheckboxDisabled: core.Color.Neutral700,
  // Container
  Container: core.Color.Neutral800,
  // Dropdown
  DropdownMenu: core.Color.Neutral700,
  DropdownMenuItemActive: core.Color.Neutral600,
  DropdownMenuItemHover: core.Color.Neutral600,
  // HR
  HrDark: core.Color.Neutral500,
  HrLight: core.Color.Neutral600,
  // Input
  InputChip: core.Color.Neutral700,
  InputChipHover: core.Color.Neutral600,
  InputDisabled: 'transparent',
  InputFocus: "transparent",
  InputLabelDefault: core.Color.Neutral800,
  InputLabelSecondary: core.Color.Neutral900,
  // Left Nav
  LeftNavItem: core.Color.Neutral800,
  LeftNavItemActive: core.Color.Neutral900,
  LeftNavItemHover: core.Color.Neutral700,
  // Modal
  Modal: core.Color.Neutral800,
  ModalClose: core.Color.Neutral700,
  ModalScrim: core.Color.TransparentScrimDarker,
  // Radio
  RadioChecked: core.Color.Neutral900,
  RadioDisabled: core.Color.Neutral700,
  RadioDot: core.Color.Neutral600,
  RadioDotChecked: core.Color.NeutralWhite,
  RadioDotDisabled: core.Color.Neutral600,
  // Switch
  SwitchDisabledOff: core.Color.Neutral900,
  SwitchDisabledOn: core.Color.Neutral900,
  SwitchHandle: core.Color.NeutralWhite,
  SwitchHandleDisabled: core.Color.Neutral700,
  SwitchOff: core.Color.Neutral700,
  // Tab
  TabHover: core.Color.Neutral700,
  // Table
  TableRowHover: core.Color.Neutral700,
  TableFooter: core.Color.Neutral700,
  // Tooltip
  Tooltip: core.Color.Neutral700,
})

export default {
  light,
  dark,
}
