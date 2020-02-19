const light = core => ({
  Button: core.BorderRadius.Medium,
  Input: core.BorderRadius.Medium,
  Modal: core.BorderRadius.Medium,
  ModalClose: core.BorderRadius.Medium,
  DropdownToggle: core.BorderRadius.Medium,
  DropdownMenu: core.BorderRadius.Medium,
  Container: core.BorderRadius.Medium,
  Card: core.BorderRadius.Medium,
  Switch: core.BorderRadius.Rounded,
  Tooltip: core.BorderRadius.Medium,
})

const dark = core => ({
  ...light(core),
})

export default {
  light,
  dark,
}
