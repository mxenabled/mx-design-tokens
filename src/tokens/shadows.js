import core from 'src/tokens/core'

const light = {
  Card: core.Shadows.Low,
  DropdownMenu: core.Shadows.Medium,
  Modal: core.Shadows.High,
  BottomBar: core.Shadows.Top,
  Drawer: core.Shadows.Left,
}

const dark = {
  ...light
}

export default {
  light,
  dark,
}
