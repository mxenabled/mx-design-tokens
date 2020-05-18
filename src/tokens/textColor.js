const light = core => ({
  // Global
  Active: core.Color.Primary300,
  ActiveHover: core.Color.Primary400,
  Default: core.Color.Neutral900,
  Disabled: core.Color.Neutral500,
  Error: core.Color.Error300,
  Secondary: core.Color.Neutral700,
  // Avatar
  Avatar: core.Color.Neutral900,
  // Button
  ButtonDestructive: core.Color.NeutralWhite,
  ButtonDestructiveDisabled: core.Color.Neutral500,
  ButtonLink: core.Color.Primary300,
  ButtonLinkHover: core.Color.Primary400,
  ButtonLinkTertiary: core.Color.Neutral700,
  ButtonNeutral: core.Color.Primary300,
  ButtonNeutralDisabled: core.Color.Neutral600,
  ButtonNeutralHover: core.Color.Primary400,
  ButtonPrimary: core.Color.NeutralWhite,
  ButtonPrimaryDisabled: core.Color.Neutral500,
  ButtonTransparent: core.Color.Primary300,
  ButtonTransparentDisabled: core.Color.Neutral600,
  ButtonTransparentHover: core.Color.Primary400,
  ButtonTransparentTertiary: core.Color.Neutral700,
  // Dropdown
  DropdownMenuItemActive: core.Color.Primary300,
  DropdownMenuItemDisabled: core.Color.Neutral500,
  // Input
  InputErrorMessage: core.Color.Error300,
  InputHelpText: core.Color.Neutral600,
  InputLabel: core.Color.Neutral600,
  InputPlaceholder: core.Color.Neutral600,
  // Left Nav
  LeftNavItemActive: core.Color.Primary400,
  // Modal
  ModalClose: core.Color.Neutral900,
  // Tab
  TabActive: core.Color.Primary300,
  // Tooltip
  Tooltip: core.Color.NeutralWhite,
})

const dark = core => ({
  ...light(core),
  // Global
  Active: core.Color.Primary200,
  ActiveHover: core.Color.Primary100,
  Default: core.Color.NeutralWhite,
  Disabled: core.Color.Neutral600,
  Error: core.Color.Error200,
  Secondary: core.Color.Neutral500,
  // Avatar
  Avatar: core.Color.NeutralWhite,
  // Button
  ButtonLink: core.Color.Primary200,
  ButtonLinkDisabled: core.Color.Neutral600,
  ButtonLinkHover: core.Color.NeutralWhite,
  ButtonLinkTertiary: core.Color.Neutral400,
  ButtonNeutral: core.Color.NeutralWhite,
  ButtonNeutralDisabled: core.Color.Neutral500,
  ButtonNeutralHover: core.Color.NeutralWhite,
  ButtonPrimaryDisabled: core.Color.Neutral500,
  ButtonTransparent: core.Color.Primary200,
  ButtonTransparentDisabled: core.Color.Neutral600,
  ButtonTransparentHover: core.Color.NeutralWhite,
  ButtonTransparentTertiary: core.Color.Neutral400,
  // Dropdown
  DropdownMenuItemActive: core.Color.White,
  // Input
  InputErrorMessage: core.Color.Error200,
  InputHelpText: core.Color.Neutral500,
  InputLabel: core.Color.Neutral500,
  InputPlaceholder: core.Color.Neutral500,
  // Left Nav
  LeftNavItemActive: core.Color.NeutralWhite,
  // Modal
  ModalClose: core.Color.NeutralWhite,
  // Tab
  TabActive: core.Color.Primary200,
})

export default {
  light,
  dark,
}
