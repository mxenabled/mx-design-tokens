"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var light = function light(core) {
  return _objectSpread({}, core.Spacing, {
    // Breadcrumbs
    BreadcrumbsDividerMargin: core.Spacing.Small,
    // Button
    ButtonPadding: core.Spacing.Small,
    // Card
    CardSidePadding: core.Spacing.Medium,
    // Checkbox
    CheckboxLabelMarginLeft: core.Spacing.XSmall,
    CheckboxLabelMarginRight: core.Spacing.XSmall,
    // Chip
    ChipPaddingTop: core.Spacing.Tiny,
    ChipPaddingBottom: core.Spacing.Tiny,
    ChipPaddingLeft: core.Spacing.XSmall,
    ChipPaddingRight: core.Spacing.XSmall,
    // Container
    ContainerSidePadding: core.Spacing.Large,
    // Input
    InputHelpTextMarginTop: core.Spacing.Tiny,
    InputLabelMarginLeft: core.Spacing.XSmall,
    InputLabelPaddingLeft: core.Spacing.Tiny,
    InputLabelPaddingRight: core.Spacing.Tiny,
    InputLabelTop: -Math.abs(core.Spacing.XSmall),
    InputPaddingBottom: core.Spacing.Small,
    InputPaddingLeft: core.Spacing.Small,
    InputPaddingRight: core.Spacing.Small,
    InputPaddingTop: core.Spacing.Medium,
    // Modal
    ModalPadding: core.Spacing.Small,
    // Switch
    SwitchLabelMarginLeft: core.Spacing.Small,
    SwitchLabelMarginRight: core.Spacing.Small,
    // Table
    TableCell: core.Spacing.Medium,
    TableCellActionMargin: core.Spacing.Large,
    TableFooterPaddingTop: core.Spacing.Small,
    TableFooterPaddingSide: core.Spacing.Medium,
    // Tag
    TagPaddingTopBottom: core.Spacing.XSmall,
    TagPaddingLeftRight: core.Spacing.Small,
    TagSmallPaddingTopBottom: core.Spacing.XTiny,
    TagSmallPaddingLeftRight: core.Spacing.XSmall,
    // Textarea
    TextAreaPadding: core.Spacing.Small,
    // Tooltip
    TooltipPadding: core.Spacing.Small
  });
};

var dark = function dark(core) {
  return _objectSpread({}, light(core));
};

var _default = {
  light: light,
  dark: dark
};
exports["default"] = _default;