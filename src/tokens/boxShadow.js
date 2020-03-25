const light = core => ({
  Low: core.BoxShadow.Low,
  Medium: core.BoxShadow.Medium,
  High: core.BoxShadow.High,
  Left: core.BoxShadow.Left,
  Right: core.BoxShadow.Right,
  Card: core.BoxShadow.Low,
  Container: core.BoxShadow.Low,
  DropdownMenu: core.BoxShadow.Medium,
  Modal: core.BoxShadow.High,
  BottomBar: core.BoxShadow.Top,
  Drawer: core.BoxShadow.Left,
  FocusRingDefault: core.BoxShadow.Focus,
  Tooltip: core.BoxShadow.Medium,
})

const dark = core => ({
  ...light(core),
  Card: 'none',
  Container: 'none',
  DropdownMenu: 'none',
  Modal: 'none',
  BottomBar: 'none',
  Drawer: 'none',
})

export default {
  light,
  dark,
}
