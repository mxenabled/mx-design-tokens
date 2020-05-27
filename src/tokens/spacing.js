const light = core => ({
  // Button
  ButtonPadding: core.Spacing.Small,
  // Card
  CardSidePadding: core.Spacing.Medium,
  // Checkbox
  CheckboxLabelMarginLeft: core.Spacing.Small,
  CheckboxLabelMarginRight: core.Spacing.Small,
  // Container
  ContainerSidePadding: core.Spacing.Large,
  // Input
  InputHelpTextMarginTop: core.Spacing.Tiny,
  InputLabelMarginLeft: core.Spacing.Small,
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
  // Textarea
  TextAreaPadding: core.Spacing.Small,
  // Tooltip
  TooltipPadding: core.Spacing.Small,
})

const dark = core => ({
  ...light(core),
})

export default {
  light,
  dark,
}
