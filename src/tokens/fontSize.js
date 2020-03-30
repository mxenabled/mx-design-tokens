const light = core => ({
  Input: core.FontSize.Body,
  InputLabel: core.FontSize.Small,
  InputHelpText: core.FontSize.Small,
  TextArea: core.FontSize.Body,
  TextAreaHelpText: core.FontSize.Small,
  DropdownToggle: core.FontSize.Body,
  DropdownItem: core.FontSize.Body,
  DropdownChip: core.FontSize.Tiny,
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
