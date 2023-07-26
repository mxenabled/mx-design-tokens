"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyTargetModifications = void 0;
const core_1 = __importDefault(require("./core"));
const utils_1 = require("./utils");
const index_1 = require("./index");
// Shared modifications
const updatedBoxShadow = (0, utils_1.updateValues)(core_1.default.BoxShadow, '');
const updatedEasing = (0, utils_1.updateValues)(core_1.default.Easing, 'cubic-bezier(0.475, 0.425, 0, 0.995)');
// React Native modifications
const updatedTime = (0, utils_1.addSuffix)(core_1.default.Time, 'ms');
// Native modifications
const updatedLineHeight = (0, utils_1.removeSuffix)(core_1.default.LineHeight, 'px');
const applyTargetModifications = (target = index_1.targets.REACT, coreTokens = core_1.default) => {
    let modifiedTokens = coreTokens;
    if (target === index_1.targets.REACT) {
        const reactWebTokenMods = [coreTokens];
        modifiedTokens = Object.assign({}, ...reactWebTokenMods);
    }
    else if (target === index_1.targets.REACT_NATIVE) {
        const reactNativeTokenMods = [coreTokens, updatedBoxShadow, updatedEasing, updatedTime];
        modifiedTokens = Object.assign({}, ...reactNativeTokenMods);
    }
    else if (target === index_1.targets.NATIVE) {
        const nativeTokenMods = [coreTokens, updatedBoxShadow, updatedEasing, updatedLineHeight];
        modifiedTokens = Object.assign({}, ...nativeTokenMods);
    }
    else {
        console.error(`ERROR: applyTargetModifications unknown target [${target}]`);
    }
    return modifiedTokens;
};
exports.applyTargetModifications = applyTargetModifications;
//# sourceMappingURL=mods.js.map