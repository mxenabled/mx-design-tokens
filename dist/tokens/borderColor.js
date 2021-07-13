"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var light = function light(core) {
  return {
    // Global
    Error: core.Color.Error300,
    // Button
    ButtonLinkHover: core.Color.Brand400,
    ButtonLinkDestructiveHover: core.Color.Error400,
    ButtonNeutral: core.Color.Neutral400,
    ButtonNeutralDisabled: core.Color.Brand400,
    ButtonNeutralHover: core.Color.Brand400,
    // Checkbox
    Checkbox: core.Color.Neutral600,
    CheckboxChecked: core.Color.Brand300,
    CheckboxDisabled: core.Color.Neutral400,
    //Chip
    ChipDefault: core.Color.Neutral600,
    ChipDefaultHover: core.Color.Neutral300,
    ChipDefaultActive: core.Color.Brand100,
    ChipDefaultDisabled: core.Color.Neutral500,
    // Dropdown
    DropdownDisabled: core.Color.TransparentNeutral400,
    // Input
    Input: core.Color.Neutral600,
    InputDisabled: core.Color.TransparentNeutral400,
    InputError: core.Color.Error300,
    InputFocus: core.Color.Brand300,
    InputHover: core.Color.Neutral600,
    // SelectionBox
    SelectionBoxOutline: core.Color.Neutral300,
    SelectionBoxFocusedSelected: core.Color.Primary300,
    SelectionBoxDisabled: core.Color.Neutral300,
    SelectionBoxDisabledSelected: core.Color.Neutral500,
    // Radio
    Radio: core.Color.Neutral600,
    RadioChecked: core.Color.Brand300,
    RadioDisabled: core.Color.Neutral400,
    RadioDisabledChecked: core.Color.Neutral500,
    // Switch
    Switch: core.Color.Neutral600,
    SwitchDisabled: core.Color.Neutral400,
    // Tab
    TabActive: core.Color.Brand300,
    // Table
    TableHeader: core.Color.Neutral400,
    TableCell: core.Color.Neutral200
  };
};

var dark = function dark(core) {
  return _objectSpread(_objectSpread({}, light(core)), {}, {
    // Global
    Error: core.Color.Error200,
    // Button
    ButtonLinkHover: core.Color.NeutralWhite,
    ButtonLinkDestructiveHover: core.Color.NeutralWhite,
    ButtonNeutral: core.Color.Neutral500,
    ButtonNeutralDisabled: core.Color.Neutral600,
    ButtonNeutralHover: core.Color.Neutral500,
    // Checkbox
    Checkbox: core.Color.Neutral400,
    CheckboxChecked: core.Color.NeutralWhite,
    CheckboxDisabled: core.Color.Neutral600,
    //Chip
    ChipDefault: core.Color.Neutral500,
    ChipDefaultHover: core.Color.Neutral600,
    ChipDefaultActive: core.Color.Brand200,
    ChipDefaultDisabled: core.Color.Neutral600,
    // Input
    Input: core.Color.Neutral500,
    InputDisabled: core.Color.Neutral600,
    InputError: core.Color.Error200,
    InputFocus: core.Color.Brand200,
    InputHover: core.Color.Neutral500,
    // SelectionBox
    SelectionBoxOutline: core.Color.Neutral700,
    SelectionBoxFocusedSelected: core.Color.Primary200,
    SelectionBoxDisabled: core.Color.Neutral700,
    SelectionBoxDisabledSelected: core.Color.Neutral700,
    // Radio
    Radio: core.Color.NeutralWhite,
    RadioChecked: core.Color.NeutralWhite,
    RadioDisabled: core.Color.Neutral600,
    // Switch
    SwitchDisabled: core.Color.Neutral600,
    // Tab
    TabActive: core.Color.Brand200,
    // Table
    TableHeader: core.Color.Neutral600,
    TableCell: core.Color.Neutral700
  });
};

var _default = {
  light: light,
  dark: dark
};
exports["default"] = _default;