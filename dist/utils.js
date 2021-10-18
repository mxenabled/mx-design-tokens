"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateValues = exports.removeSuffix = exports.addSuffix = exports.splitTokens = exports.collapseTokens = exports.expandTokens = exports.getTokenType = exports.deepMerge = exports.isObject = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// test if value is a simple object {}
var isObject = function isObject(value) {
  return value && _typeof(value) === 'object' && !Array.isArray(value);
}; // recursively merge two simple token objects (won't handle circular refs)


exports.isObject = isObject;

var deepMerge = function deepMerge(target, source) {
  var retValues = Object.assign({}, target);

  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(function (key) {
      if (isObject(source[key])) {
        if (!(key in target)) {
          Object.assign(retValues, _defineProperty({}, key, source[key]));
        } else {
          retValues[key] = deepMerge(target[key], source[key]);
        }
      } else {
        Object.assign(retValues, _defineProperty({}, key, source[key]));
      }
    });
  }

  return retValues;
}; // is token part of core or a calculated leaf value


exports.deepMerge = deepMerge;

var getTokenType = function getTokenType(token, core, leaf) {
  var tokenType = 'new';
  var coreKeys = Object.keys(core);
  var leafKeys = Object.keys(leaf);
  coreKeys.map(function (rKey) {
    if (token.hasOwnProperty(rKey)) {
      var subKeys = Object.keys(core[rKey]);
      subKeys.map(function (sKey) {
        if (token[rKey].hasOwnProperty(sKey)) {
          tokenType = token[rKey][sKey] === core[rKey][sKey] ? 'core-default' : 'core-updated';
        }
      });
    }
  });
  leafKeys.map(function (rKey) {
    if (token.hasOwnProperty(rKey)) {
      var subKeys = Object.keys(leaf[rKey]);
      subKeys.map(function (sKey) {
        if (token[rKey].hasOwnProperty(sKey)) {
          tokenType = token[rKey][sKey] === leaf[rKey][sKey] ? 'leaf-default' : 'leaf-updated';
        }
      });
    }
  });
  return tokenType;
}; // convert a single token object into an array of individual tokens


exports.getTokenType = getTokenType;

var expandTokens = function expandTokens(tokens) {
  var tokenList = [];
  var rootEntries = Object.entries(tokens);
  rootEntries.map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        rKey = _ref2[0],
        rVal = _ref2[1];

    var subEntries = Object.entries(rVal);
    subEntries.map(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          sKey = _ref4[0],
          sVal = _ref4[1];

      var singleToken = Object.fromEntries([[sKey, sVal]]);
      tokenList.push(Object.fromEntries([[rKey, singleToken]]));
    });
  });
  return tokenList;
}; // convert array of individual tokens into a single token object


exports.expandTokens = expandTokens;

var collapseTokens = function collapseTokens(tokenList) {
  var retToken = {};
  tokenList.map(function (token) {
    return retToken = Object.assign({}, deepMerge(retToken, token));
  });
  return retToken;
}; // split a token object into various partitions


exports.collapseTokens = collapseTokens;

var splitTokens = function splitTokens(tokens, core, leaf) {
  var partitionedLists = {
    defaultTokens: {
      core: [],
      leaf: []
    },
    updatedTokens: {
      core: [],
      leaf: [],
      "new": []
    }
  };
  var tokenList = expandTokens(tokens);
  tokenList.map(function (token) {
    var type = getTokenType(token, core, leaf);

    if (type === 'core-default') {
      partitionedLists.defaultTokens.core.push(token);
    } else if (type === 'core-updated') {
      partitionedLists.updatedTokens.core.push(token);
    } else if (type === 'leaf-default') {
      partitionedLists.defaultTokens.leaf.push(token);
    } else if (type === 'leaf-updated') {
      partitionedLists.updatedTokens.leaf.push(token);
    } else {
      partitionedLists.updatedTokens["new"].push(token);
    }
  });
  return partitionedLists;
}; // concatenate a `suffix` to each token value in `json`
// by default the suffix will be 'px'


exports.splitTokens = splitTokens;

var addSuffix = function addSuffix(json) {
  var suffix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'px';
  var retValues = {};
  Object.keys(json).forEach(function (key) {
    retValues[key] = ''.concat(json[key], suffix);
  });
  return Object.assign({}, json, retValues);
}; // remove a `suffix` like 'px' from each token value in `json`
// by default the resulting value is stored as a number


exports.addSuffix = addSuffix;

var removeSuffix = function removeSuffix(json) {
  var suffix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'px';
  var valueIsNumber = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var retValues = {};
  Object.keys(json).forEach(function (key) {
    if (json[key].slice(-suffix.length) === suffix) {
      var shortVal = json[key].slice(0, -suffix.length);

      var _valueIsNumber = !isNaN(shortVal) && !isNaN(parseFloat(shortVal));

      retValues[key] = _valueIsNumber ? parseFloat(shortVal) : shortVal;
    }
  });
  return Object.assign({}, json, retValues);
}; // overwrite everything in `json` with a hardcoded `value`
// by default the values will be reset to empty string


exports.removeSuffix = removeSuffix;

var updateValues = function updateValues(json) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var retValues = {};
  Object.keys(json).forEach(function (key) {
    retValues[key] = isObject(value) ? Object.assign({}, retValues, value) : value;
  });
  return Object.assign({}, json, retValues);
};

exports.updateValues = updateValues;