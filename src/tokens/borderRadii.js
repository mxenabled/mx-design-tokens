import core from 'src/tokens/core'

const light = {
  Button: core.BorderRadii.Medium,
  Input: core.BorderRadii.Medium,
  Modal: core.BorderRadii.Medium,
  ModalClose: core.BorderRadii.Medium,
  DropdownToggle: core.BorderRadii.Medium,
  DropdownMenu: core.BorderRadii.Medium,
  Container: core.BorderRadii.Medium,
  Card: core.BorderRadii.Medium,
}

const dark = {
  ...light
}

export default {
  light,
  dark,
}
