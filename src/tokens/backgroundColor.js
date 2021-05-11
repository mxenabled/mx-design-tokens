const light = (core) => ({
  // Global
  Body: core.Color.Neutral100,
  Error: core.Color.Error300,
  //Avatar
  Avatar: core.Color.Neutral300,
  // Button
  ButtonDestructive: core.Color.Error300,
  ButtonDestructiveDisabled: core.Color.Neutral200,
  ButtonDestructiveHover: core.Color.Error400,
  ButtonLinkHover: core.Color.Brand100,
  ButtonNeutral: core.Color.NeutralWhite,
  ButtonNeutralDisabled: core.Color.NeutralWhite,
  ButtonNeutralHover: core.Color.NeutralWhite,
  ButtonPrimary: core.Color.Brand300,
  ButtonPrimaryDisabled: core.Color.Neutral200,
  ButtonPrimaryHover: core.Color.Brand400,
  ButtonTransparentHover: core.Color.Brand100,
  // Card
  Card: core.Color.NeutralWhite,
  //Checkbox
  CheckboxChecked: core.Color.Brand100,
  CheckboxDisabled: core.Color.Neutral100,
  // Chip
  ChipDefault: 'transparent',
  ChipDefaultHover: core.Color.Neutral300,
  ChipDefaultActive: core.Color.Brand100,
  //Container
  Container: core.Color.NeutralWhite,
  // Dropdown
  DropdownMenu: core.Color.NeutralWhite,
  DropdownMenuItemActive: core.Color.Brand100,
  DropdownMenuItemHover: core.Color.Neutral100,
  // HR
  HrDark: core.Color.Neutral400,
  HrLight: core.Color.Neutral300,
  // Input
  InputChip: core.Color.Brand100,
  InputChipHover: core.Color.Brand300,
  InputDisabled: core.Color.TransparentNeutral100,
  InputFocus: 'transparent',
  InputLabelDefault: core.Color.NeutralWhite,
  InputLabelSecondary: core.Color.Neutral100,
  // Left Nav
  LeftNavItem: core.Color.NeutralWhite,
  LeftNavItemActive: core.Color.Brand100,
  LeftNavItemHover: core.Color.Neutral100,
  // MessageBox
  MessageBox: core.Color.NeutralWhite,
  MessageBoxBrand: core.Color.Brand300,
  MessageBoxError: core.Color.Error300,
  MessageBoxHelp: core.Color.Primary300,
  MessageBoxSuccess: core.Color.Success300,
  // Modal
  Modal: core.Color.NeutralWhite,
  ModalClose: core.Color.Neutral200,
  ModalCloseHover: core.Color.Neutral300,
  ModalScrim: core.Color.TransparentScrim,
  // SelectionBox
  SelectionBoxShadow: 'transparent',
  SelectionBoxShadowDisabled: core.Color.Neutral200,
  // Radio
  RadioChecked: core.Color.Brand100,
  RadioDisabled: core.Color.Brand100,
  RadioDot: core.Color.Neutral100,
  RadioDotChecked: core.Color.Brand300,
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
  TabDivider: core.Color.Neutral400,
  TabHover: core.Color.Neutral100,
  // Tag
  TagError: core.Color.Error100,
  TagNeutral: core.Color.Neutral200,
  TagPrimary: core.Color.Primary100,
  TagSuccess: core.Color.Success100,
  TagWarning: core.Color.Warning100,
  // Table
  TableRowHover: core.Color.Neutral100,
  TableFooter: core.Color.Neutral200,
  //Tooltip
  Tooltip: core.Color.Neutral800,
})

const dark = (core) => ({
  ...light(core),
  // Global
  Body: core.Color.Neutral900,
  Error: core.Color.Error200,
  //Avatar
  Avatar: core.Color.Neutral700,
  // Button
  ButtonDestructiveDisabled: core.Color.Neutral700,
  ButtonLinkHover: core.Color.Neutral700,
  ButtonLinkDestructiveHover: core.Color.Neutral700,
  ButtonNeutral: core.Color.Neutral800,
  ButtonNeutralDisabled: core.Color.Neutral700,
  ButtonNeutralHover: core.Color.Neutral600,
  ButtonPrimaryDisabled: core.Color.Neutral700,
  ButtonTransparentHover: core.Color.Neutral600,
  // Card
  Card: core.Color.Neutral800,
  // Chip
  ChipDefault: 'transparent',
  ChipDefaultHover: core.Color.Neutral600,
  ChipDefaultActive: 'transparent',
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
  InputFocus: 'transparent',
  InputLabelDefault: core.Color.Neutral800,
  InputLabelSecondary: core.Color.Neutral900,
  // Left Nav
  LeftNavItem: core.Color.Neutral800,
  LeftNavItemActive: core.Color.Neutral900,
  LeftNavItemHover: core.Color.Neutral700,
  // MessageBox
  MessageBox: core.Color.Neutral700,
  MessageBoxBrand: core.Color.Brand200,
  MessageBoxError: core.Color.Error200,
  MessageBoxHelp: core.Color.Primary200,
  MessageBoxSuccess: core.Color.Success200,
  // Modal
  Modal: core.Color.Neutral800,
  ModalClose: core.Color.Neutral700,
  ModalCloseHover: core.Color.Neutral600,
  ModalScrim: core.Color.TransparentScrimDarker,
  // SelectionBox
  SelectionBoxShadow: core.Color.Neutral700,
  SelectionBoxShadowDisabled: core.Color.Neutral700,
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
  TabDivider: core.Color.Neutral600,
  TabHover: core.Color.Neutral700,
  // Tag
  TagError: core.Color.Error500,
  TagNeutral: core.Color.Neutral600,
  TagPrimary: core.Color.Primary500,
  TagSuccess: core.Color.Success500,
  TagWarning: core.Color.Warning300,
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
