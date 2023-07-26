import type { BorderRadiusType, TokenType } from '../TokenType'

const light = (core: TokenType) => ({
  // Globals
  ...core.BorderRadius,
  // Button
  Button: core.BorderRadius.Medium,
  // Card
  Card: core.BorderRadius.Medium,
  CardRounded: core.BorderRadius.Large,
  // Checkbox
  Checkbox: core.BorderRadius.Small,
  // Chip
  Chip: core.BorderRadius.XLarge,
  // Container
  Container: core.BorderRadius.Medium,
  // Dropdown
  DropdownChip: core.BorderRadius.Medium,
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
} as BorderRadiusType)

const dark = (core: TokenType) => ({
  ...light(core),
} as BorderRadiusType)

export default {
  light,
  dark,
}
