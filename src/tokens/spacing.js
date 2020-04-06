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
  //Input
  InputLabelTop: -Math.abs(core.Spacing.XSmall),
  InputLabelMarginLeft: core.Spacing.Small,
  InputLabelPaddingRight: core.Spacing.Tiny,
  InputLabelPaddingLeft: core.Spacing.Tiny,
  InputPaddingTop: core.Spacing.Medium,
  InputPaddingRight: core.Spacing.Small,
  InputPaddingBottom: core.Spacing.Small,
  InputPaddingLeft: core.Spacing.Small,
  InputHelpTextMarginTop: core.Spacing.Tiny,
  //Modal
  ModalPadding: core.Spacing.Small,
  // Switch
  SwitchLabelMarginLeft: core.Spacing.Small,
  SwitchLabelMarginRight: core.Spacing.Small,
  // TextArea
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
