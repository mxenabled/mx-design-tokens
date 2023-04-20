const light = (core) => ({
  // Global
  Active: core.Color.Brand300,
  ActiveHover: core.Color.Brand400,
  Dark: core.Color.Neutral900,
  Default: core.Color.Neutral900,
  Disabled: core.Color.Neutral500,
  Error: core.Color.Error300,
  Secondary: core.Color.Neutral700,
  Success: core.Color.Success400,
  // Avatar
  Avatar: core.Color.Neutral900,
  // Breadcrumbs
  BreadcrumbsLink: core.Color.Brand300,
  BreadcrumbsDivider: core.Color.Neutral600,
  BreadcrumbsCurrentRoute: core.Color.Neutral900,
  // Button
  ButtonDestructive: core.Color.NeutralWhite,
  ButtonDestructiveDisabled: core.Color.Neutral500,
  ButtonLink: core.Color.Brand300,
  ButtonLinkHover: core.Color.Brand400,
  ButtonLinkTertiary: core.Color.Neutral700,
  ButtonLinkDestructive: core.Color.Error300,
  ButtonLinkDestructiveHover: core.Color.Error400,
  ButtonNeutral: core.Color.Brand300,
  ButtonNeutralDisabled: core.Color.Neutral600,
  ButtonNeutralHover: core.Color.Brand400,
  ButtonPrimary: core.Color.NeutralWhite,
  ButtonPrimaryDisabled: core.Color.Neutral500,
  ButtonTransparent: core.Color.Brand300,
  ButtonTransparentDisabled: core.Color.Neutral600,
  ButtonTransparentHover: core.Color.Brand400,
  ButtonTransparentTertiary: core.Color.Neutral700,
  // Chip
  ChipDefault: core.Color.Neutral900,
  ChipDefaultActive: core.Color.Brand400,
  ChipDefaultDisabled: core.Color.Neutral500,
  // Dropdown
  DropdownMenuItemActive: core.Color.Brand300,
  DropdownMenuItemDisabled: core.Color.Neutral500,
  // Input
  InputErrorMessage: core.Color.Error300,
  InputHelpText: core.Color.Neutral600,
  InputLabel: core.Color.Neutral600,
  InputPlaceholder: core.Color.Neutral600,
  // Left Nav
  LeftNavItemActive: core.Color.Brand400,
  // Modal
  ModalClose: core.Color.Neutral900,
  // SelectionBox
  SelectionBoxDisabled: core.Color.Neutral500,
  // Tab
  TabActive: core.Color.Brand300,
  // Tag
  TagError: core.Color.Error500,
  TagNeutral: core.Color.Neutral700,
  TagPrimary: core.Color.Primary400,
  TagSuccess: core.Color.Success500,
  TagWarning: core.Color.Warning500,
  // Tooltip
  Tooltip: core.Color.NeutralWhite,
})

const dark = (core) => ({
  ...light(core),
  // Global
  Active: core.Color.Brand200,
  ActiveHover: core.Color.Brand100,
  Dark: core.Color.Neutral900,
  Default: core.Color.NeutralWhite,
  Disabled: core.Color.Neutral600,
  Error: core.Color.Error200,
  Secondary: core.Color.Neutral500,
  Success: core.Color.Success300,
  // Avatar
  Avatar: core.Color.NeutralWhite,
  // Breadcrumbs
  BreadcrumbsLink: core.Color.Brand200,
  BreadcrumbsDivider: core.Color.NeutralWhite,
  BreadcrumbsCurrentRoute: core.Color.NeutralWhite,
  // Button
  ButtonLink: core.Color.Brand200,
  ButtonLinkDisabled: core.Color.Neutral600,
  ButtonLinkHover: core.Color.NeutralWhite,
  ButtonLinkTertiary: core.Color.Neutral400,
  ButtonLinkDestructive: core.Color.Error200,
  ButtonLinkDestructiveHover: core.Color.NeutralWhite,
  ButtonNeutral: core.Color.NeutralWhite,
  ButtonNeutralDisabled: core.Color.Neutral500,
  ButtonNeutralHover: core.Color.NeutralWhite,
  ButtonPrimaryDisabled: core.Color.Neutral500,
  ButtonTransparent: core.Color.Brand200,
  ButtonTransparentDisabled: core.Color.Neutral600,
  ButtonTransparentHover: core.Color.NeutralWhite,
  ButtonTransparentDestructiveHover: core.Color.NeutralWhite,
  ButtonTransparentTertiary: core.Color.Neutral400,
  // Dropdown
  DropdownMenuItemActive: core.Color.NeutralWhite,
  // Chip
  ChipDefault: core.Color.NeutralWhite,
  ChipDefaultActive: core.Color.Brand200,
  ChipDefaultDisabled: core.Color.Neutral600,
  // Input
  InputErrorMessage: core.Color.Error200,
  InputHelpText: core.Color.Neutral500,
  InputLabel: core.Color.Neutral500,
  InputPlaceholder: core.Color.Neutral500,
  // Left Nav
  LeftNavItemActive: core.Color.NeutralWhite,
  // Modal
  ModalClose: core.Color.NeutralWhite,
  // SelectionBox
  SelectionBoxDisabled: core.Color.Neutral500,
  // Tab
  TabActive: core.Color.Brand200,
  // Tag
  TagError: core.Color.NeutralWhite,
  TagNeutral: core.Color.NeutralWhite,
  TagPrimary: core.Color.NeutralWhite,
  TagSuccess: core.Color.NeutralWhite,
  TagWarning: core.Color.Neutral800,
  // Tooltip
  Tooltip: core.Color.Neutral900,
})

export default {
  light,
  dark,
}
