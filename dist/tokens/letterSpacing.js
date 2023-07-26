"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const light = () => ({
    SmallUppercase: -0.52,
    TinyUppercase: 0.33,
    XSmallUppercase: 0.33,
});
const dark = () => ({
    ...light(),
});
exports.default = {
    light,
    dark,
};
//# sourceMappingURL=letterSpacing.js.map