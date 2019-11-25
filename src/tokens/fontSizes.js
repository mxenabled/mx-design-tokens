import core from 'src/tokens/core'

const light = {
  Input: core.FontSizes.Body,
  InputLabel: core.FontSizes.Body,
  InputHelpText: core.FontSizes.Small,
  TextArea: core.FontSizes.Body,
  TextAreaHelpText: core.FontSizes.Small,
  DropdownToggle: core.FontSizes.Body,
  DropdownItems: core.FontSizes.Body,
  ModalHeader: core.FontSizes.H3,
  LinkButtonSmall: core.FontSizes.Small,
  LinkButtonLarge: core.FontSizes.Body,
  Button: core.FontSizes.Body,
}

const dark = {
  ...light
}

export default {
  light,
  dark,
}
