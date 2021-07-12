const light = (core) => ({
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
  Tooltip: core.ZIndex.Overlay7,
})

const dark = (core) => ({
  ...light(core),
})

export default {
  light,
  dark,
}
