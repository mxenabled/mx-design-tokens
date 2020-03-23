const light = core => ({
  Button: core.BorderRadius.Medium,
  Input: core.BorderRadius.Medium,
  Modal: core.BorderRadius.Medium,
  ModalClose: core.BorderRadius.Medium,
  DropdownToggle: core.BorderRadius.Medium,
  DropdownMenu: core.BorderRadius.Medium,
  Container: core.BorderRadius.Medium,
  Card: core.BorderRadius.Medium,
  Tooltip: core.BorderRadius.Medium,
  Checkbox: core.BorderRadius.Small,
})

const dark = core => ({
  ...light(core),
})

export default {
  light,
  dark,
}
