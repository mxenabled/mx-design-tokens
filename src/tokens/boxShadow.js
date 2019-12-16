const light = core => ({
  Card: core.BoxShadow.Low,
  DropdownMenu: core.BoxShadow.Medium,
  Modal: core.BoxShadow.High,
  BottomBar: core.BoxShadow.Top,
  Drawer: core.BoxShadow.Left,
})

const dark = core => ({
  ...light(core),
})

export default {
  light,
  dark,
}
