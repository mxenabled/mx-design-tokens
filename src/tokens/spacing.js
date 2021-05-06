const light = (core) => ({
  // Button
  ButtonPadding: core.Spacing.Small,
  // Card
  CardSidePadding: core.Spacing.Medium,
  // Checkbox
  CheckboxLabelMarginLeft: core.Spacing.XSmall,
  CheckboxLabelMarginRight: core.Spacing.XSmall,
  // Chip
  ChipPaddingTop: core.Spacing.Tiny,
  ChipPaddingBottom: core.Spacing.Tiny,
  ChipPaddingLeft: core.Spacing.XSmall,
  ChipPaddingRight: core.Spacing.XSmall,
  // Container
  ContainerSidePadding: core.Spacing.Large,
  // Input
  InputHelpTextMarginTop: core.Spacing.Tiny,
  InputLabelMarginLeft: core.Spacing.XSmall,
  InputLabelPaddingLeft: core.Spacing.Tiny,
  InputLabelPaddingRight: core.Spacing.Tiny,
  InputLabelTop: -Math.abs(core.Spacing.XSmall),
  InputPaddingBottom: core.Spacing.Small,
  InputPaddingLeft: core.Spacing.Small,
  InputPaddingRight: core.Spacing.Small,
  InputPaddingTop: core.Spacing.Medium,
  // Modal
  ModalPadding: core.Spacing.Small,
  // Switch
  SwitchLabelMarginLeft: core.Spacing.Small,
  SwitchLabelMarginRight: core.Spacing.Small,
  // Table
  TableCell: core.Spacing.Medium,
  TableCellActionMargin: core.Spacing.Large,
  TableFooterPaddingTop: core.Spacing.Small,
  TableFooterPaddingSide: core.Spacing.Medium,
  // Tag
  TagPaddingTopBottom: core.Spacing.XSmall,
  TagPaddingLeftRight: core.Spacing.Small,
  TagSmallPaddingTopBottom: core.Spacing.XTiny,
  TagSmallPaddingLeftRight: core.Spacing.XSmall,
  // Textarea
  TextAreaPadding: core.Spacing.Small,
  // Tooltip
  TooltipPadding: core.Spacing.Small,
})

const dark = (core) => ({
  ...light(core),
})

export default {
  light,
  dark,
}
