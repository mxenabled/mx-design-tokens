import core from 'src/tokens/core'

const light = {
  Button: core.BorderRadius.Medium,
  Input: core.BorderRadius.Medium,
  Modal: core.BorderRadius.Medium,
  ModalClose: core.BorderRadius.Medium,
  DropdownToggle: core.BorderRadius.Medium,
  DropdownMenu: core.BorderRadius.Medium,
  Container: core.BorderRadius.Medium,
  Card: core.BorderRadius.Medium,
}

const dark = {
  ...light,
}

export default {
  light,
  dark,
}
