const colorKeys = ['Color', 'BackgroundColor', 'BorderColor', 'TextColor']
const cssTargets = {
  BackgroundColor: 'background-color',
  BorderColor: 'border-color',
  BorderRadius: 'border-radius',
  BoxShadow: 'box-shadow',
  Color: 'color',
  Font: 'font-family',
  FontSize: 'font-size',
  FontWeight: 'font-weight',
  LetterSpacing: 'letter-spacing',
  LineHeight: 'line-height',
  Spacing: 'padding',
  Time: '',
  Easing: '',
  MediaQuery: '',
  Resolution: '',
  TextColor: 'color',
}
const themeList = require('../../dist/index.js')
const themes = [
  { name: 'light', theme: themeList.light },
  { name: 'dark', theme: themeList.dark },
]

exports.colorKeys = colorKeys
exports.cssTargets = cssTargets
exports.themeList = themeList
exports.themes = themes
