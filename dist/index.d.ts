import type { TokenTypes } from './TokenTypes';
export { BackgroundColorType, BorderColorType, BorderRadiusType, BoxShadowType, ColorType, EasingType, FontSizeType, FontType, FontWeightType, LetterSpacingType, LineHeightType, MediaQueryType, ResolutionType, SpacingType, TextColorType, TimeType, TokenTypes, ZIndexType } from './TokenTypes';
export declare const targets: {
    REACT: string;
    REACT_NATIVE: string;
    NATIVE: string;
};
export declare const themes: {
    LIGHT: string;
    DARK: string;
};
export declare const buildTheme: (theme?: string, target?: string, tokenOverrides?: {}) => TokenTypes;
export declare const light: TokenTypes;
export declare const dark: TokenTypes;
