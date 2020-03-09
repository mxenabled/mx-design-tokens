import core from 'src/tokens/core'
import backgroundColor from 'src/tokens/backgroundColor'
import borderColor from 'src/tokens/borderColor'
import borderRadius from 'src/tokens/borderRadius'
import boxShadow from 'src/tokens/boxShadow'
import fontSize from 'src/tokens/fontSize'
import spacing from 'src/tokens/spacing'
import textColor from 'src/tokens/textColor'

export const buildTheme = (themeName, customColors = {}, removePx = false) => {
  if (removePx) {
    removePixels(core)
  }

  const customCore = {
    ...core,
    Color: {
      ...core.Color,
      ...customColors,
    },
  }

  return {
    ...core,
    BackgroundColor: backgroundColor[themeName](customCore),
    BorderColor: borderColor[themeName](customCore),
    BorderRadius: {
      ...core.BorderRadius,
      ...borderRadius[themeName](customCore),
    },
    BoxShadow: {
      ...core.BoxShadow,
      ...boxShadow[themeName](customCore),
    },
    FontSize: {
      ...core.FontSize,
      ...fontSize[themeName](customCore),
    },
    Spacing: {
      ...core.Spacing,
      ...spacing[themeName](customCore),
    },
    TextColor: textColor[themeName](customCore),
  }
}

const removePixels = core => {
  Object.keys(core).forEach(key => {
    const category = core[key]
    if (
      key === 'BorderRadius' ||
      key === 'FontSize' ||
      key === 'LineHeight' ||
      key === 'Spacing' ||
      key === 'MediaQuery'
    ) {
      Object.keys(category).forEach(property => {
        category[property] = parseInt(category[property], 10)
      })
    }
  })
}

export const light = buildTheme('light')

export const dark = buildTheme('dark')
