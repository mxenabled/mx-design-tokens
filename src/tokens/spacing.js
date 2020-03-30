const light = core => ({
  ButtonPadding: core.Spacing.Small,
  CheckboxLabelMarginLeft: core.Spacing.Small,
  CheckboxLabelMarginRight: core.Spacing.Small,
  SwitchLabelMarginLeft: core.Spacing.Small,
  SwitchLabelMarginRight: core.Spacing.Small,
  InputLabelTop: `-${core.Spacing.XSmall}`,
  InputLabelMarginLeft: core.Spacing.Small,
  InputLabelPaddingTop: "0",
  InputLabelPaddingRight: core.Spacing.Tiny,
  InputLabelPaddingBottom: "0",
  InputLabelPaddingLeft: core.Spacing.Tiny,
  InputPaddingTop: core.Spacing.Medium,
  InputPaddingRight: core.Spacing.Small,
  InputPaddingBottom: core.Spacing.Small,
  InputPaddingLeft: core.Spacing.Small,
  InputHelpTextMarginTop: core.Spacing.Tiny,
  TextAreaPadding: core.Spacing.Small,
  ModalPadding: core.Spacing.Small,
  ContainerSidePadding: core.Spacing.Large,
  CardSidePadding: core.Spacing.Medium,
  TooltipPadding: core.Spacing.Small,
})

const dark = core => ({
  ...light(core),
})

export default {
  light,
  dark,
}
