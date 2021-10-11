const light = (core) => ({
  // Globals
  ...core.FontSize,
  // Breadcrumbs
  Breadcrumbs: core.FontSize.Body,
  // Button
  Button: core.FontSize.Body,
  ButtonLinkLarge: core.FontSize.Body,
  ButtonLinkSmall: core.FontSize.Small,
  // Dropdown
  DropdownChip: core.FontSize.Tiny,
  DropdownItem: core.FontSize.Body,
  // Chip
  Chip: core.FontSize.XSmall,
  // Input
  Input: core.FontSize.Body,
  InputHelpText: core.FontSize.Small,
  InputLabel: core.FontSize.Small,
  // Modal
  ModalHeader: core.FontSize.H3,
  // Textarea
  TextArea: core.FontSize.Body,
  TextAreaHelpText: core.FontSize.Small,
  // Tooltip
  TooltipHeadline: core.FontSize.Body,
  TooltipText: core.FontSize.ParagraphSmall,
})

const dark = (core) => ({
  ...light(core),
})

export default {
  light,
  dark,
}
