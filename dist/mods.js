"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyTargetModifications = void 0;

var _core = _interopRequireDefault(require("./core"));

var _utils = require("./utils");

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Target Specific Modifications
// Shared
var updatedBoxShadow = (0, _utils.updateValues)(_core["default"].BoxShadow, '');
var updatedEasing = (0, _utils.updateValues)(_core["default"].Easing, {
  x1: 0.475,
  y1: 0.425,
  x2: 0,
  y2: 0.995
}); // React Native

var updatedTime = (0, _utils.addSuffix)(_core["default"].Time, 'ms'); // Native

var updatedLineHeight = (0, _utils.removeSuffix)(_core["default"].LineHeight, 'px');

var applyTargetModifications = function applyTargetModifications() {
  var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _index.targets.REACT;
  var coreTokens = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _core["default"];

  if (target === _index.targets.REACT_NATIVE) {
    var reactNativeTokens = Object.assign({}, coreTokens, updatedBoxShadow, updatedEasing, updatedTime);
    return reactNativeTokens;
  } else if (target === _index.targets.NATIVE) {
    var nativeTokens = Object.assign({}, coreTokens, updatedBoxShadow, updatedEasing, updatedLineHeight);
    return nativeTokens;
  } else {
    return coreTokens;
  }
};

exports.applyTargetModifications = applyTargetModifications;