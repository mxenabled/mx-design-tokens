const light = core => ({
  ButtonPadding: core.Spacing.Small,
  CheckboxLabelMarginLeft: core.Spacing.Small,
  CheckboxLabelMarginRight: core.Spacing.Small,
  SwitchLabelMarginLeft: core.Spacing.Small,
  SwitchLabelMarginRight: core.Spacing.Small,
  InputLabelMarginBottom: core.Spacing.Tiny,
  InputLabelMarginLeft: core.Spacing.Tiny,
  InputPadding: core.Spacing.Small,
  InputHelpTextMarginTop: core.Spacing.Tiny,
  TextAreaPadding: core.Spacing.Small,
  DropdownToggle: core.Spacing.Small,
  DropdownItemPaddingTopBottom: core.Spacing.Small,
  DropdownItemPaddingLeftright: core.Spacing.XSmall,
  ModalPadding: core.Spacing.Small,
  ContainerSidePadding: core.Spacing.Large,
  CardSidePadding: core.Spacing.Medium,
})

const dark = core => ({
  ...light(core),
})

export default {
  light,
  dark,
}
