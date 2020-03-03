const light = core => ({
  Input: core.FontSize.Body,
  InputLabel: core.FontSize.Body,
  InputHelpText: core.FontSize.Small,
  TextArea: core.FontSize.Body,
  TextAreaHelpText: core.FontSize.Small,
  DropdownToggle: core.FontSize.Body,
  DropdownItems: core.FontSize.Body,
  ModalHeader: core.FontSize.H3,
  ButtonLinkSmall: core.FontSize.Small,
  ButtonLinkLarge: core.FontSize.Body,
  Button: core.FontSize.Body,
  TooltipHeadline: core.FontSize.Body,
  TooltipText: core.FontSize.ParagraphSmall,
})

const dark = core => ({
  ...light(core),
})

export default {
  light,
  dark,
}
