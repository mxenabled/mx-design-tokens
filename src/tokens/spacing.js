const light = core => ({
  ButtonPadding: core.Spacing.Small,
  CheckboxLabelMarginLeft: core.Spacing.Small,
  CheckboxLabelMarginRight: core.Spacing.Small,
  SwitchLabelMarginLeft: core.Spacing.Small,
  SwitchLabelMarginRight: core.Spacing.Small,
  InputLabelTop: `-${core.Spacing.XSmall}`,
  InputLabelMarginLeft: core.Spacing.Small,
  InputLabelPadding: `0 ${core.Spacing.Tiny}`,
  InputPadding: `${core.Spacing.Medium} ${core.Spacing.Small} ${core.Spacing.Small} ${core.Spacing.Small}`,
  InputHelpTextMarginTop: core.Spacing.Tiny,
  TextAreaPadding: core.Spacing.Small,
  DropdownLabelTop: `-${core.Spacing.XSmall}`,
  DropdownLabelMarginLeft: core.Spacing.Small,
  DropdownLabelPadding: `0 ${core.Spacing.Tiny}`,
  DropdownPadding: `${core.Spacing.Medium} ${core.Spacing.Small} ${core.Spacing.Small} ${core.Spacing.Small}`,
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
