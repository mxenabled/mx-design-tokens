"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTargetSpecificTokens = void 0;

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

var getTargetSpecificTokens = function getTargetSpecificTokens(target, tokenOverrides) {
  var coreTokens = (0, _utils.deepMerge)(_core["default"], tokenOverrides);
  var reactNativeTokens = Object.assign({}, coreTokens, updatedBoxShadow, updatedEasing, updatedTime);
  var nativeTokens = Object.assign({}, coreTokens, updatedBoxShadow, updatedEasing, updatedLineHeight);

  if (target === _index.targets.REACT_NATIVE) {
    return reactNativeTokens;
  } else if (target === _index.targets.NATIVE) {
    return nativeTokens;
  } else {
    return coreTokens;
  }
};

exports.getTargetSpecificTokens = getTargetSpecificTokens;