const light = core => ({
  Input: core.FontSize.Body,
  InputLabel: core.FontSize.Body,
  InputHelpText: core.FontSize.Small,
  TextArea: core.FontSize.Body,
  TextAreaHelpText: core.FontSize.Small,
  DropdownToggle: core.FontSize.Body,
  DropdownItems: core.FontSize.Body,
  ModalHeader: core.FontSize.H3,
  LinkButtonSmall: core.FontSize.Small,
  LinkButtonLarge: core.FontSize.Body,
  Button: core.FontSize.Body,
})

const dark = core => ({
  ...light(core),
})

export default {
  light,
  dark,
}
