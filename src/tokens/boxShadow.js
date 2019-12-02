import core from 'src/tokens/core'

const light = {
  Card: core.BoxShadow.Low,
  DropdownMenu: core.BoxShadow.Medium,
  Modal: core.BoxShadow.High,
  BottomBar: core.BoxShadow.Top,
  Drawer: core.BoxShadow.Left,
}

const dark = {
  ...light,
}

export default {
  light,
  dark,
}
