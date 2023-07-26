import type { BoxShadowType, TokenType } from '../TokenType'

const light = (core: TokenType) => ({
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
  // SelectionBox
  SelectionBoxShadow: core.BoxShadow.Low,
  // Tooltip
  Tooltip: core.BoxShadow.Medium,
} as BoxShadowType)

const dark = (core: TokenType) => ({
  ...light(core),
  // Bottom Bar
  BottomBar: 'none',
  // Card
  Card: 'none',
  // Container
  Container: 'none',
  // Drawer
  Drawer: 'none',
  // Dropdown
  DropdownMenu: 'none',
  // Modal
  Modal: 'none',
  // SelectionBox
  SelectionBoxShadow: 'none',
  // Tooltip
  Tooltip: 'none',
} as BoxShadowType)

export default {
  light,
  dark,
}
