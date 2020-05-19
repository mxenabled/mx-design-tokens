const light = core => ({
  // Button
  Button: core.BorderRadius.Medium,
  // Card
  Card: core.BorderRadius.Medium,
  // Checkbox
  Checkbox: core.BorderRadius.Small,
  // Container
  Container: core.BorderRadius.Medium,
  // Dropdown
  DropdownChip: core.BorderRadius.Medium,
  DropdownMenu: core.BorderRadius.Medium,
  DropdownMenu: core.BorderRadius.Medium,
  DropdownMenuItem: core.BorderRadius.Medium,
  DropdownToggle: core.BorderRadius.Medium,
  // Input
  Input: core.BorderRadius.Medium,
  // Modal
  Modal: core.BorderRadius.Medium,
  ModalClose: core.BorderRadius.Medium,
  // Tooltip
  Tooltip: core.BorderRadius.Medium,
})

const dark = core => ({
  ...light(core),
})

export default {
  light,
  dark,
}
