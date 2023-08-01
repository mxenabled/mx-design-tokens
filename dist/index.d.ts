import type { TokenTypes } from './TokenTypes';
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
