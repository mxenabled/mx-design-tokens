"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var light = function light(core) {
  return {
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
    Tooltip: core.BoxShadow.Medium
  };
};

var dark = function dark(core) {
  return _objectSpread({}, light(core), {
    // Bottom Bar
    BottomBar: '',
    // Card
    Card: '',
    // Container
    Container: '',
    // Drawer
    Drawer: '',
    // Dropdown
    DropdownMenu: '',
    // Modal
    Modal: '',
    // SelectionBox
    SelectionBoxShadow: 'none',
    // Tooltip
    Tooltip: 'none'
  });
};

var _default = {
  light: light,
  dark: dark
};
exports["default"] = _default;