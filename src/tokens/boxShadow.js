const light = core => ({
  // Global
  Low: core.BoxShadow.Low,
  Medium: core.BoxShadow.Medium,
  High: core.BoxShadow.High,
  FocusRingDefault: core.BoxShadow.Focus,
  Left: core.BoxShadow.Left,
  Right: core.BoxShadow.Right,  
  // Bottom Bar
  BottomBar: core.BoxShadow.Top,
  // Card
  Card: core.BoxShadow.Low,
  // Container
  Container: core.BoxShadow.Low,
  // Drawer
  Drawer: core.BoxShadow.Left,
  // Dropdown
  DropdownMenu: core.BoxShadow.Medium,
  // Modal
  Modal: core.BoxShadow.High,
  // Tooltip
  Tooltip: core.BoxShadow.Medium,
})

const dark = core => ({
  ...light(core),
  // Bottom Bar
  BottomBar: '',
  // Card
  Card: '',
  // Container
  Container: '',
  // Drawer
  Drawer: '',
  // Dropdown
  DropdownMenu: '',
  // Modal
  Modal: '',
})

export default {
  light,
  dark,
}
