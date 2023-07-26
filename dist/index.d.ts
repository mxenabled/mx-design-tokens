import type { TokenType } from './TokenType';
export declare const targets: {
    REACT: string;
    REACT_NATIVE: string;
    NATIVE: string;
};
export declare const themes: {
    LIGHT: string;
    DARK: string;
};
export declare const buildTheme: (theme?: string, target?: string, tokenOverrides?: {}) => TokenType;
export declare const light: TokenType;
export declare const dark: TokenType;
