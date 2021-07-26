"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTargetSpecificOverrides = exports.nativeOverrides = exports.reactNativeOverrides = exports.commonOverrides = void 0;

var _core = _interopRequireDefault(require("./core"));

var _ = require("../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Changes required everywhere except React Web
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
}; // Changes required for tokens in React Native applications

exports.commonOverrides = commonOverrides;

var reactNativeOverrides = _objectSpread(_objectSpread({}, commonOverrides), {}, {
  Time: _objectSpread({}, addSuffix(_core["default"].Time, 'ms'))
}); // Changes required for tokens in Native applications


exports.reactNativeOverrides = reactNativeOverrides;

var nativeOverrides = _objectSpread(_objectSpread({}, commonOverrides), {}, {
  LineHeight: _objectSpread({}, removeSuffix(_core["default"].LineHeight, 'px'))
});

exports.nativeOverrides = nativeOverrides;

var getTargetSpecificOverrides = function getTargetSpecificOverrides(target) {
  if (target === _.targets.REACT_NATIVE) {
    return reactNativeOverrides;
  } else if (target === _.targets.NATIVE) {
    return nativeOverrides;
  } // React Web shouldn't override any tokens


  return {};
};

exports.getTargetSpecificOverrides = getTargetSpecificOverrides;

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