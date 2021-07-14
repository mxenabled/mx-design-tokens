import core from 'src/tokens/core'
import backgroundColor from 'src/tokens/backgroundColor'
import borderColor from 'src/tokens/borderColor'
import borderRadius from 'src/tokens/borderRadius'
import boxShadow from 'src/tokens/boxShadow'
import letterSpacing from 'src/tokens/letterSpacing'
import fontSize from 'src/tokens/fontSize'
import spacing from 'src/tokens/spacing'
import textColor from 'src/tokens/textColor'
import zIndex from 'src/tokens/zIndex'

export const targets = {
  REACT: 'react',
  REACT_NATIVE: 'react_native',
  NATIVE: 'native',
}

export const themes = {
  LIGHT: 'light',
  DARK: 'dark',
}

export const buildTheme = (
  themeName = themes.LIGHT,
  target = targets.REACT,
  tokenOverrides = {},
) => {
  // make all target based changes here so they're easy to find
  const targetBasedMods = (target) => {
    // React Web - all token values should be stored and ready to use by React Web apps (without modifications)
    let cleansedOverrides = {}

    // Common changes applied to all targets excpet React Web apps
    const commonOverrides = {
      BoxShadow: {
        Low: '',
        Medium: '',
        High: '',
        Top: '',
        Left: '',
        Right: '',
        Focus: '',
      },
      Easing: {
        Default: {
          x1: 0.475,
          y1: 0.425,
          x2: 0,
          y2: 0.995,
        },
      },
    }

    // React Native - token modifications needed by React Native apps
    const reactNativeOverrides = {
      ...commonOverrides,
      Time: {
        Short: '300ms',
        Med: '500ms',
        Long: '1000ms',
      },
    }

    // Native - token modifications needed by Native OS apps
    const nativeOverrides = {
      ...commonOverrides,
      LineHeight: {
        Tiny: 12,
        XSmall: 14,
        Small: 16,
        ParagraphSmall: 20,
        Body: 20,
        Paragraph: 24,
        H3: 24,
        H2: 32,
        H1: 40,
      },
    }

    if (target === targets.REACT_NATIVE) {
      return reactNativeOverrides
    } else if (target === targets.NATIVE) {
      return nativeOverrides
    }

    return cleansedOverrides
  }

  const builtCore = {
    ...core,
    ...targetBasedMods(target),
  }

  return {
    ...builtCore,
    BackgroundColor: backgroundColor[themeName](builtCore),
    BorderColor: borderColor[themeName](builtCore),
    BorderRadius: borderRadius[themeName](builtCore),
    BoxShadow: boxShadow[themeName](builtCore),
    LetterSpacing: letterSpacing[themeName](builtCore),
    FontSize: fontSize[themeName](builtCore),
    Spacing: spacing[themeName](builtCore),
    TextColor: textColor[themeName](builtCore),
    ZIndex: zIndex[themeName](builtCore),
    ...tokenOverrides,
  }
}

export const light = buildTheme('light')

export const dark = buildTheme('dark')
