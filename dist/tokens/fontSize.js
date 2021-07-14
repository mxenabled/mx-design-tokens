"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var light = function light(core) {
  return _objectSpread(_objectSpread({}, core.FontSize), {}, {
    // Button
    Button: core.FontSize.Body,
    ButtonLinkLarge: core.FontSize.Body,
    ButtonLinkSmall: core.FontSize.Small,
    // Dropdown
    DropdownChip: core.FontSize.Tiny,
    DropdownItem: core.FontSize.Body,
    // Chip
    Chip: core.FontSize.XSmall,
    // Input
    Input: core.FontSize.Body,
    InputHelpText: core.FontSize.Small,
    InputLabel: core.FontSize.Small,
    // Modal
    ModalHeader: core.FontSize.H3,
    // Textarea
    TextArea: core.FontSize.Body,
    TextAreaHelpText: core.FontSize.Small,
    // Tooltip
    TooltipHeadline: core.FontSize.Body,
    TooltipText: core.FontSize.ParagraphSmall
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