"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dark = exports.light = exports.buildTheme = exports.themes = exports.targets = void 0;

var _core = _interopRequireDefault(require("./tokens/core"));

var _backgroundColor = _interopRequireDefault(require("./tokens/backgroundColor"));

var _borderColor = _interopRequireDefault(require("./tokens/borderColor"));

var _borderRadius = _interopRequireDefault(require("./tokens/borderRadius"));

var _boxShadow = _interopRequireDefault(require("./tokens/boxShadow"));

var _letterSpacing = _interopRequireDefault(require("./tokens/letterSpacing"));

var _fontSize = _interopRequireDefault(require("./tokens/fontSize"));

var _spacing = _interopRequireDefault(require("./tokens/spacing"));

var _textColor = _interopRequireDefault(require("./tokens/textColor"));

var _zIndex = _interopRequireDefault(require("./tokens/zIndex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var targets = {
  REACT: 'react',
  REACT_NATIVE: 'react_native',
  NATIVE: 'native'
};
exports.targets = targets;
var themes = {
  LIGHT: 'light',
  DARK: 'dark'
};
exports.themes = themes;

var buildTheme = function buildTheme() {
  var themeName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : themes.LIGHT;
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : targets.REACT;
  var tokenOverrides = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var targetOverrides = getTargetSpecificOverrides(target, _core["default"]);

  var builtCore = _objectSpread(_objectSpread({}, _core["default"]), targetOverrides);

  return _objectSpread(_objectSpread({}, builtCore), {}, {
    BackgroundColor: _backgroundColor["default"][themeName](builtCore),
    BorderColor: _borderColor["default"][themeName](builtCore),
    BorderRadius: _borderRadius["default"][themeName](builtCore),
    BoxShadow: _boxShadow["default"][themeName](builtCore),
    LetterSpacing: _letterSpacing["default"][themeName](builtCore),
    FontSize: _fontSize["default"][themeName](builtCore),
    Spacing: _spacing["default"][themeName](builtCore),
    TextColor: _textColor["default"][themeName](builtCore),
    ZIndex: _zIndex["default"][themeName](builtCore)
  }, tokenOverrides);
}; // keep target specific token modifications here so they are easier to manage


exports.buildTheme = buildTheme;

function getTargetSpecificOverrides(target, tokens) {
  // React Web - all token values should be stored in core and ready to use without modifications
  var reactWebOverrides = {}; // Common changes applied to all targets excpet React Web apps

  var commonOverrides = {
    BoxShadow: _objectSpread({}, updateValues(_core["default"].BoxShadow, '')),
    Easing: {
      Default: {
        x1: 0.475,
        y1: 0.425,
        x2: 0,
        y2: 0.995
      }
    }
  }; // React Native - token modifications needed by React Native apps

  var reactNativeOverrides = _objectSpread(_objectSpread({}, commonOverrides), {}, {
    Time: _objectSpread({}, addSuffix(_core["default"].Time, 'ms'))
  }); // console.log(reactNativeOverrides)
  // Native - token modifications needed by Native OS apps


  var nativeOverrides = _objectSpread(_objectSpread({}, commonOverrides), {}, {
    LineHeight: _objectSpread({}, removeSuffix(_core["default"].LineHeight, 'px'))
  }); // console.log(nativeOverrides)


  if (target === targets.REACT_NATIVE) {
    return reactNativeOverrides;
  } else if (target === targets.NATIVE) {
    return nativeOverrides;
  }

  return reactWebOverrides;
} // helper functions which take in a list of key/value pairs and modify all values


function addSuffix(json) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'px';
  var retValues = {};
  Object.keys(json).forEach(function (key) {
    retValues[key] = ''.concat(json[key], value);
  });
  return retValues;
}

function removeSuffix(json) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'px';
  var isNumeric = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var retValues = {};
  Object.keys(json).forEach(function (key) {
    if (json[key].slice(-value.length) === value) {
      var shortVal = json[key].slice(0, -value.length);

      var _isNumeric = !isNaN(shortVal) && !isNaN(parseFloat(shortVal));

      retValues[key] = _isNumeric ? parseFloat(shortVal) : shortVal;
    }
  });
  return retValues;
}

function updateValues(json) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var retValues = {};
  Object.keys(json).forEach(function (key) {
    retValues[key] = value;
  });
  return retValues;
}

var light = buildTheme('light');
exports.light = light;
var dark = buildTheme('dark');
exports.dark = dark;