"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateValues = exports.removeSuffix = exports.addSuffix = exports.splitTokens = exports.collapseTokens = exports.expandTokens = exports.getTokenType = exports.deepMerge = exports.isObject = void 0;
// test if value is a simple object {}
const isObject = (value) => value && typeof value === 'object' && !Array.isArray(value);
exports.isObject = isObject;
// recursively merge two simple token objects (won't handle circular refs)
const deepMerge = (target, source) => {
    let retValues = Object.assign({}, target);
    if ((0, exports.isObject)(target) && (0, exports.isObject)(source)) {
        Object.keys(source).forEach((key) => {
            if ((0, exports.isObject)(source[key])) {
                if (!(key in target)) {
                    Object.assign(retValues, { [key]: source[key] });
                }
                else {
                    retValues[key] = (0, exports.deepMerge)(target[key], source[key]);
                }
            }
            else {
                Object.assign(retValues, { [key]: source[key] });
            }
        });
    }
    return retValues;
};
exports.deepMerge = deepMerge;
// is token part of core or a calculated leaf value
const getTokenType = (token, core, leaf) => {
    let tokenType = 'new';
    const coreKeys = Object.keys(core);
    const leafKeys = Object.keys(leaf);
    coreKeys.map((rKey) => {
        if (token.hasOwnProperty(rKey)) {
            const subKeys = Object.keys(core[rKey]);
            subKeys.map((sKey) => {
                if (token[rKey].hasOwnProperty(sKey)) {
                    tokenType = token[rKey][sKey] === core[rKey][sKey] ? 'core-default' : 'core-updated';
                }
            });
        }
    });
    leafKeys.map((rKey) => {
        if (token.hasOwnProperty(rKey)) {
            const subKeys = Object.keys(leaf[rKey]);
            subKeys.map((sKey) => {
                if (token[rKey].hasOwnProperty(sKey)) {
                    tokenType = token[rKey][sKey] === leaf[rKey][sKey] ? 'leaf-default' : 'leaf-updated';
                }
            });
        }
    });
    return tokenType;
};
exports.getTokenType = getTokenType;
// convert a single token object into an array of individual tokens
const expandTokens = (tokens) => {
    let tokenList = [];
    const rootEntries = Object.entries(tokens);
    rootEntries.map(([rKey, rVal]) => {
        const subEntries = Object.entries(rVal);
        subEntries.map(([sKey, sVal]) => {
            const singleToken = Object.fromEntries([[sKey, sVal]]);
            tokenList.push(Object.fromEntries([[rKey, singleToken]]));
        });
    });
    return tokenList;
};
exports.expandTokens = expandTokens;
// convert array of individual tokens into a single token object
const collapseTokens = (tokenList) => {
    let retToken = {};
    tokenList.map((token) => (retToken = Object.assign({}, (0, exports.deepMerge)(retToken, token))));
    return retToken;
};
exports.collapseTokens = collapseTokens;
// split a token object into various partitions
const splitTokens = (tokens, core, leaf) => {
    const partitionedLists = {
        defaultTokens: {
            core: [],
            leaf: [],
        },
        updatedTokens: {
            core: [],
            leaf: [],
            new: [],
        },
    };
    const tokenList = (0, exports.expandTokens)(tokens);
    tokenList.map((token) => {
        const tokenType = (0, exports.getTokenType)(token, core, leaf);
        if (tokenType === 'core-default') {
            partitionedLists.defaultTokens.core.push(token);
        }
        else if (tokenType === 'core-updated') {
            partitionedLists.updatedTokens.core.push(token);
        }
        else if (tokenType === 'leaf-default') {
            partitionedLists.defaultTokens.leaf.push(token);
        }
        else if (tokenType === 'leaf-updated') {
            partitionedLists.updatedTokens.leaf.push(token);
        }
        else {
            partitionedLists.updatedTokens.new.push(token);
        }
    });
    return partitionedLists;
};
exports.splitTokens = splitTokens;
// concatenate a `suffix` to each token value in `json`
// by default the suffix will be 'px'
const addSuffix = (json, suffix = 'px') => {
    let retValues = {};
    Object.keys(json).forEach(function (key) {
        retValues[key] = ''.concat(json[key], suffix);
    });
    return Object.assign({}, json, retValues);
};
exports.addSuffix = addSuffix;
// remove a `suffix` like 'px' from each token value in `json`
// by default the resulting value is stored as a number
const removeSuffix = (json, suffix = 'px') => {
    let retValues = {};
    Object.keys(json).forEach((key) => {
        if (json[key].slice(-suffix.length) === suffix) {
            const shortVal = json[key].slice(0, -suffix.length);
            const valueIsNumber = !isNaN(shortVal) && !isNaN(parseFloat(shortVal));
            retValues[key] = valueIsNumber ? parseFloat(shortVal) : shortVal;
        }
    });
    return Object.assign({}, json, retValues);
};
exports.removeSuffix = removeSuffix;
// overwrite everything in `json` with a hardcoded `value`
// by default the values will be reset to empty string
const updateValues = (json, value = '') => {
    let retValues = {};
    Object.keys(json).forEach(function (key) {
        retValues[key] = (0, exports.isObject)(value) ? Object.assign({}, retValues, value) : value;
    });
    return Object.assign({}, json, retValues);
};
exports.updateValues = updateValues;
//# sourceMappingURL=utils.js.map