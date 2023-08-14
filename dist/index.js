"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dark = exports.light = exports.buildTheme = exports.themes = exports.targets = void 0;
const core_1 = __importDefault(require("./core"));
const mods_1 = require("./mods");
const utils_1 = require("./utils");
const backgroundColor_1 = __importDefault(require("./tokens/backgroundColor"));
const borderColor_1 = __importDefault(require("./tokens/borderColor"));
const borderRadius_1 = __importDefault(require("./tokens/borderRadius"));
const boxShadow_1 = __importDefault(require("./tokens/boxShadow"));
const fontSize_1 = __importDefault(require("./tokens/fontSize"));
const spacing_1 = __importDefault(require("./tokens/spacing"));
const textColor_1 = __importDefault(require("./tokens/textColor"));
const zIndex_1 = __importDefault(require("./tokens/zIndex"));
exports.targets = {
    REACT: 'react',
    REACT_NATIVE: 'react_native',
    NATIVE: 'native',
};
exports.themes = {
    LIGHT: 'light',
    DARK: 'dark',
};
const getSectionTokens = (theme = exports.themes.LIGHT, base = core_1.default) => ({
    BackgroundColor: theme === exports.themes.LIGHT ? backgroundColor_1.default.light(base) : backgroundColor_1.default.dark(base),
    BorderColor: theme === exports.themes.LIGHT ? borderColor_1.default.light(base) : borderColor_1.default.dark(base),
    BorderRadius: theme === exports.themes.LIGHT ? borderRadius_1.default.light(base) : borderRadius_1.default.dark(base),
    BoxShadow: theme === exports.themes.LIGHT ? boxShadow_1.default.light(base) : boxShadow_1.default.dark(base),
    FontSize: theme === exports.themes.LIGHT ? fontSize_1.default.light(base) : fontSize_1.default.dark(base),
    Spacing: theme === exports.themes.LIGHT ? spacing_1.default.light(base) : spacing_1.default.dark(base),
    TextColor: theme === exports.themes.LIGHT ? textColor_1.default.light(base) : textColor_1.default.dark(base),
    ZIndex: theme === exports.themes.LIGHT ? zIndex_1.default.light(base) : zIndex_1.default.dark(base)
});
const buildTheme = (theme = exports.themes.LIGHT, target = exports.targets.REACT, tokenOverrides = {}) => {
    // core token changes propagate down
    const baseCore = Object.assign({}, core_1.default);
    const baseLeaf = getSectionTokens(theme);
    const baseParts = (0, utils_1.splitTokens)(tokenOverrides, baseCore, baseLeaf);
    const updatedCore = (0, utils_1.collapseTokens)(baseParts.updatedTokens.core);
    const mergedCore = (0, utils_1.deepMerge)(baseCore, updatedCore);
    const customCore = (0, mods_1.applyTargetModifications)(target, mergedCore);
    const customLeaf = getSectionTokens(theme, customCore);
    const customBoth = (0, utils_1.deepMerge)(customCore, customLeaf);
    // leaf token changes take priority over core token changes
    let mergedLeaf = {};
    const leafChanges = baseParts.updatedTokens.leaf;
    leafChanges.map((l) => {
        mergedLeaf = (0, utils_1.deepMerge)(mergedLeaf, l);
    });
    const newChanges = baseParts.updatedTokens.new;
    newChanges.map((n) => {
        mergedLeaf = (0, utils_1.deepMerge)(mergedLeaf, n);
    });
    return (0, utils_1.deepMerge)(customBoth, mergedLeaf);
};
exports.buildTheme = buildTheme;
exports.light = (0, exports.buildTheme)(exports.themes.LIGHT);
exports.dark = (0, exports.buildTheme)(exports.themes.DARK);
//# sourceMappingURL=index.js.map