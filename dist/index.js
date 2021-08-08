"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dark = exports.light = exports.buildTheme = exports.themes = exports.targets = void 0;

var _core = _interopRequireDefault(require("./core"));

var _mods = require("./mods");

var _utils = require("./utils");

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

var getSectionTokens = function getSectionTokens() {
  var theme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : themes.LIGHT;
  var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _core["default"];
  return {
    BackgroundColor: _backgroundColor["default"][theme](base),
    BorderColor: _borderColor["default"][theme](base),
    BorderRadius: _borderRadius["default"][theme](base),
    BoxShadow: _boxShadow["default"][theme](base),
    LetterSpacing: _letterSpacing["default"][theme](base),
    FontSize: _fontSize["default"][theme](base),
    Spacing: _spacing["default"][theme](base),
    TextColor: _textColor["default"][theme](base),
    ZIndex: _zIndex["default"][theme](base)
  };
};

var buildTheme = function buildTheme() {
  var theme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : themes.LIGHT;
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : targets.REACT;
  var tokenOverrides = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  // core token changes propigate down but leaf token changes take precedent at the end
  var baseCore = Object.assign({}, _core["default"]);
  var baseLeaf = getSectionTokens(theme);
  var baseParts = (0, _utils.splitTokens)(tokenOverrides, baseCore, baseLeaf);
  var updatedCore = (0, _utils.collapseTokens)(baseParts.updatedTokens.core);
  var mergedCore = (0, _utils.deepMerge)(baseCore, updatedCore);
  var customCore = (0, _mods.applyTargetModifications)(target, mergedCore);
  var customLeaf = getSectionTokens(theme, customCore);
  var builtTokens = (0, _utils.deepMerge)(customCore, customLeaf);
  return builtTokens;
};

exports.buildTheme = buildTheme;
var light = buildTheme(themes.LIGHT);
exports.light = light;
var dark = buildTheme(themes.DARK);
exports.dark = dark;