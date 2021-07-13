"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dark = exports.light = exports.buildTheme = exports.targets = void 0;

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

var buildTheme = function buildTheme(themeName) {
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : targets.REACT;
  var customOverrides = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var customCore = _objectSpread(_objectSpread({}, _core["default"]), {}, {
    Color: _objectSpread({}, _core["default"].Color),
    Font: _objectSpread({}, _core["default"].Font)
  });

  var builtCore = {};
  Object.keys(customCore).forEach(function (coreKey) {
    var value = typeof customCore[coreKey] === 'function' ? customCore[coreKey](target) : customCore[coreKey];
    builtCore[coreKey] = value;
  });
  return _objectSpread(_objectSpread({}, builtCore), {}, {
    BackgroundColor: _backgroundColor["default"][themeName](builtCore),
    BorderColor: _borderColor["default"][themeName](builtCore),
    BorderRadius: _objectSpread(_objectSpread({}, _core["default"].BorderRadius), _borderRadius["default"][themeName](builtCore)),
    BoxShadow: _objectSpread(_objectSpread({}, _core["default"].BoxShadow), _boxShadow["default"][themeName](builtCore)),
    LetterSpacing: _letterSpacing["default"][themeName](builtCore),
    FontSize: _objectSpread(_objectSpread({}, _core["default"].FontSize), _fontSize["default"][themeName](builtCore)),
    Spacing: _objectSpread(_objectSpread({}, _core["default"].Spacing), _spacing["default"][themeName](builtCore)),
    TextColor: _textColor["default"][themeName](builtCore),
    ZIndex: _zIndex["default"][themeName](builtCore)
  }, customOverrides);
};

exports.buildTheme = buildTheme;
var light = buildTheme('light');
exports.light = light;
var dark = buildTheme('dark');
exports.dark = dark;