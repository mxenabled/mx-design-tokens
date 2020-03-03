const light = core => ({
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
  Card: "none",
  Container: "none",
  DropdownMenu: "none",
  Modal: "none",
  BottomBar: "none",
  Drawer: "none",
})

export default {
  light,
  dark,
}
