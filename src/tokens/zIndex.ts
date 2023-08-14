import type { TokenTypes, ZIndexType } from '../TokenTypes'

const light = (core: TokenTypes) => ({
  // Global
  SendToBack: core.ZIndex.SendToBack,
  Default: core.ZIndex.Base,
  Hover: core.ZIndex.Hover,
  Active: core.ZIndex.Active,
  Focus: core.ZIndex.Focus,
  Overlay: core.ZIndex.Overlay1,
  Sticky: core.ZIndex.Overlay2,
  Fixed: core.ZIndex.Overlay3,
  // Date Picker
  DatePicker: core.ZIndex.Overlay1,
  // Drawer
  Drawer: core.ZIndex.Overlay5,
  // Dropdown Menu
  DropdownMenu: core.ZIndex.Overlay1,
  // Message Box
  MessageBox: core.ZIndex.Overlay3,
  // Modal
  Modal: core.ZIndex.Overlay5,
  // Tooltip
  Tooltip: core.ZIndex.Overlay10,
} as ZIndexType)

const dark = (core: TokenTypes) => ({
  ...light(core),
} as ZIndexType)

export default {
  light,
  dark,
}
