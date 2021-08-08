"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dark = exports.light = exports.buildTheme = exports.themes = exports.targets = void 0;

var _mods = require("./mods");

var _utils = require("./utils");

var _backgroundColor = _interopRequireDefault(require("./tokens/backgroundColor"));

var _borderColor = _interopRequireDefault(require("./tokens/borderColor"));

var _borderRadius = _interopRequireDefault(require("./tokens/borderRadius"));

var _boxShadow = _interopRequireDefault(require("./tokens/boxShadow"));

var _letterSpacing = _interopRequireDefault(require("./tokens/letterSpacing"));

var _fontSize = _interopRequireDefault(require("./tokens/fontSize"));

var _spacing = _interopRequireDefault(require("./tokens/spacing"));

var _textColor = _interopRequireDefault(require("./tokens/textColor"));

var _zIndex = _interopRequireDefault(require("./tokens/zIndex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var targets = {
  REACT: 'react',
  REACT_NATIVE: 'react_native',
  NATIVE: 'native'
};
exports.targets = targets;
var themes = {
  LIGHT: 'light',
  DARK: 'dark'
};
exports.themes = themes;

var getTokenSections = function getTokenSections() {
  var theme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : themes.LIGHT;
  var core = arguments.length > 1 ? arguments[1] : undefined;
  return {
    BackgroundColor: _backgroundColor["default"][theme](core),
    BorderColor: _borderColor["default"][theme](core),
    BorderRadius: _borderRadius["default"][theme](core),
    BoxShadow: _boxShadow["default"][theme](core),
    LetterSpacing: _letterSpacing["default"][theme](core),
    FontSize: _fontSize["default"][theme](core),
    Spacing: _spacing["default"][theme](core),
    TextColor: _textColor["default"][theme](core),
    ZIndex: _zIndex["default"][theme](core)
  };
};

var buildTheme = function buildTheme() {
  var theme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : themes.LIGHT;
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : targets.REACT;
  var tokenOverrides = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  tokenOverrides = {
    Color: {
      Brand100: '#EAF1FB',
      Brand200: '#6FA1EC',
      Brand300: 'yellow',
      Brand400: '#165ECC',
      Brand500: '#034AB3',
      Chart1: '#74E4DA',
      Chart2: '#ED64A4',
      Chart3: '#F3DC46',
      Chart4: '#BABFC5',
      Chart5: '#60A9FF',
      Chart6: '#C8BAEE',
      Chart7: '#585E67',
      ChartMono1: '#89E8DF',
      ChartMono2: '#FF8787',
      ChartMono3: '#60A9FF',
      ChartMono4: '#2F73DA',
      ChartMono5: '#034AB3',
      ChartMono6: '#002966',
      NeutralWhite: '#FFFFFF',
      Neutral100: '#F8F9FB',
      Neutral200: '#EEF1F6',
      Neutral300: '#E4E8EE',
      Neutral400: '#CDD3DD',
      Neutral500: '#A8B1BD',
      Neutral600: '#6A7381',
      Neutral700: '#49505A',
      Neutral800: '#1F2329',
      Neutral900: '#121417',
      Primary100: '#EAF1FB',
      Primary200: '#6FA1EC',
      Primary300: '#2F73DA',
      Primary400: '#165ECC',
      Primary500: '#034AB3',
      Success100: '#DDFDED',
      Success200: '#0AC295',
      Success300: '#09A57F',
      Success400: '#078364',
      Success500: '#027357',
      Warning100: '#FEF7B9',
      Warning200: '#FFDA6C',
      Warning300: '#FFB400',
      Warning400: '#E07C02',
      Warning500: '#C33E01',
      Error100: '#FCD2CF',
      Error200: '#F45532',
      Error300: '#DF320C',
      Error400: '#C61A0B',
      Error500: '#AE0A0A',
      TransparentNeutral100: 'rgba(247, 249, 252, 0.55)',
      TransparentNeutral400: 'rgba(203, 211, 223, 0.55)',
      TransparentScrim: 'rgba(0, 0, 0, 0.25)',
      TransparentScrimDarker: 'rgba(0, 0, 0, 0.50)'
    },
    Font: {
      Regular: 'ProximaNovaRegular, Helvetica, Arial, sans-serif',
      Semibold: 'ProximaNovaSemibold, Helvetica, Arial, sans-serif',
      Bold: 'ProximaNovaBold, Helvetica, Arial, sans-serif'
    },
    BoxShadow: {
      Low: '0px 2px 8px rgba(106, 115, 129, 0.12)',
      Medium: '0px 6px 12px rgba(106, 115, 129, 0.16), 0px 3px 8px rgba(87, 102, 117, 0.06)',
      High: '0px 12px 20px rgba(106, 115, 129, 0.22)',
      FocusRingDefault: '0px 0px 0px 8px rgba(244, 144, 44, 0.8)',
      Left: '-1px 2px 8px rgba(106, 115, 129, 0.22)',
      Right: '1px 0px 8px rgba(106, 115, 129, 0.22)',
      BottomBar: '0px -2px 8px rgba(106, 115, 129, 0.12)',
      Card: '0px 2px 8px rgba(106, 115, 129, 0.12)',
      Container: '0px 2px 8px rgba(106, 115, 129, 0.12)',
      Drawer: '-1px 2px 8px rgba(106, 115, 129, 0.22)',
      DropdownMenu: '0px 6px 12px rgba(106, 115, 129, 0.16), 0px 3px 8px rgba(87, 102, 117, 0.06)',
      Modal: '0px 12px 20px rgba(106, 115, 129, 0.22)',
      SelectionBoxShadow: '0px 2px 8px rgba(106, 115, 129, 0.12)',
      Tooltip: '0px 6px 12px rgba(106, 115, 129, 0.16), 0px 3px 8px rgba(87, 102, 117, 0.06)'
    },
    BorderRadius: {
      Small: 2,
      Medium: 4,
      Large: 8,
      XLarge: 16,
      Button: 24,
      Card: 4,
      CardRounded: 8,
      Checkbox: 2,
      Chip: 16,
      Container: 4,
      DropdownChip: 4,
      DropdownMenu: 4,
      DropdownMenuItem: 4,
      DropdownToggle: 4,
      Input: 4,
      Modal: 4,
      ModalClose: 4,
      Tooltip: 4
    },
    FontSize: {
      Tiny: 10,
      XSmall: 12,
      Small: 14,
      ParagraphSmall: 14,
      Body: 16,
      Paragraph: 16,
      H3: 20,
      H2: 24,
      H1: 32,
      Button: 22,
      ButtonLinkLarge: 16,
      ButtonLinkSmall: 14,
      DropdownChip: 10,
      DropdownItem: 16,
      Chip: 12,
      Input: 16,
      InputHelpText: 14,
      InputLabel: 14,
      ModalHeader: 20,
      TextArea: 16,
      TextAreaHelpText: 14,
      TooltipHeadline: 16,
      TooltipText: 14
    },
    FontWeight: {
      Regular: 400,
      Semibold: 600,
      Bold: 700
    },
    LetterSpacing: {
      SmallUppercase: 0.48,
      TinyUppercase: 0.48,
      XSmallUppercase: 0.48
    },
    LineHeight: {
      Tiny: '12px',
      XSmall: '14px',
      Small: '16px',
      ParagraphSmall: '20px',
      Body: '20px',
      Paragraph: '24px',
      H3: '24px',
      H2: '32px',
      H1: '40px'
    },
    Spacing: {
      XTiny: 2,
      Tiny: 4,
      XSmall: 8,
      Small: 12,
      Medium: 16,
      Large: 24,
      XLarge: 32,
      XXLarge: 40,
      XXXLarge: 48,
      Jumbo: 64,
      SuperJumbo: 96,
      ButtonPadding: 22,
      CardSidePadding: 16,
      CheckboxLabelMarginLeft: 8,
      CheckboxLabelMarginRight: 8,
      ChipPaddingTop: 4,
      ChipPaddingBottom: 4,
      ChipPaddingLeft: 8,
      ChipPaddingRight: 8,
      ContainerSidePadding: 24,
      InputHelpTextMarginTop: 4,
      InputLabelMarginLeft: 8,
      InputLabelPaddingLeft: 4,
      InputLabelPaddingRight: 4,
      InputLabelTop: -8,
      InputPaddingBottom: 12,
      InputPaddingLeft: 12,
      InputPaddingRight: 12,
      InputPaddingTop: 16,
      ModalPadding: 12,
      SwitchLabelMarginLeft: 12,
      SwitchLabelMarginRight: 12,
      TableCell: 16,
      TableCellActionMargin: 24,
      TableFooterPaddingTop: 12,
      TableFooterPaddingSide: 16,
      TagPaddingTopBottom: 8,
      TagPaddingLeftRight: 12,
      TagSmallPaddingTopBottom: 2,
      TagSmallPaddingLeftRight: 8,
      TextAreaPadding: 12,
      TooltipPadding: 12
    },
    Time: {
      Short: 300,
      Med: 500,
      Long: 1000
    },
    ZIndex: {
      SendToBack: -1,
      Default: 0,
      Hover: 1,
      Active: 2,
      Focus: 3,
      Overlay: 1000,
      Sticky: 2000,
      Fixed: 3000,
      DatePicker: 1000,
      Drawer: 5000,
      DropdownMenu: 1000,
      MessageBox: 3000,
      Modal: 5000,
      Tooltip: 7000
    },
    Easing: {
      Default: 'cubic-bezier(.475,.425,0,.995)'
    },
    MediaQuery: {
      Small: '576px',
      Med: '768px',
      Large: '992px',
      XLarge: '1200px'
    },
    Resolution: {
      Small: 576,
      Med: 768,
      Large: 992,
      XLarge: 1200
    },
    BackgroundColor: {
      Body: '#F8F9FB',
      Error: '#DF320C',
      Avatar: '#E4E8EE',
      ButtonDestructive: '#DF320C',
      ButtonDestructiveDisabled: '#EEF1F6',
      ButtonDestructiveHover: '#C61A0B',
      ButtonLinkHover: '#EAF1FB',
      ButtonNeutral: '#FFFFFF',
      ButtonNeutralDisabled: '#FFFFFF',
      ButtonNeutralHover: '#FFFFFF',
      ButtonPrimary: '#aecb01',
      ButtonPrimaryDisabled: '#d0d99b',
      ButtonPrimaryHover: '#96ae09',
      ButtonTransparentHover: '#EAF1FB',
      Card: '#FFFFFF',
      CheckboxChecked: '#EAF1FB',
      CheckboxDisabled: '#F8F9FB',
      ChipDefault: 'transparent',
      ChipDefaultHover: '#E4E8EE',
      ChipDefaultActive: '#EAF1FB',
      Container: '#FFFFFF',
      DropdownMenu: '#FFFFFF',
      DropdownMenuItemActive: '#EAF1FB',
      DropdownMenuItemHover: '#F8F9FB',
      HrDark: '#CDD3DD',
      HrLight: '#E4E8EE',
      InputChip: '#EAF1FB',
      InputChipHover: '#2F73DA',
      InputDisabled: 'rgba(247, 249, 252, 0.55)',
      InputFocus: 'transparent',
      InputLabelDefault: '#FFFFFF',
      InputLabelSecondary: '#F8F9FB',
      LeftNavItem: '#FFFFFF',
      LeftNavItemActive: '#EAF1FB',
      LeftNavItemHover: '#F8F9FB',
      MessageBox: '#FFFFFF',
      MessageBoxBrand: '#2F73DA',
      MessageBoxError: '#DF320C',
      MessageBoxHelp: '#2F73DA',
      MessageBoxSuccess: '#09A57F',
      Modal: '#FFFFFF',
      ModalClose: '#EEF1F6',
      ModalCloseHover: '#E4E8EE',
      ModalScrim: 'rgba(0, 0, 0, 0.25)',
      SelectionBoxShadow: 'transparent',
      SelectionBoxShadowDisabled: '#EEF1F6',
      Radio: '#EAF1FB',
      RadioChecked: '#EAF1FB',
      RadioDisabled: '#EAF1FB',
      RadioDot: '#F8F9FB',
      RadioDotChecked: '#2F73DA',
      RadioDotDisabled: '#EEF1F6',
      RadioDotDisabledChecked: '#A8B1BD',
      SwitchDisabledOff: '#EEF1F6',
      SwitchDisabledOn: '#E4E8EE',
      SwitchHandle: '#FFFFFF',
      SwitchHandleDisabled: '#F8F9FB',
      SwitchOff: '#EEF1F6',
      SwitchOn: '#09A57F',
      TabDivider: '#CDD3DD',
      TabHover: '#F8F9FB',
      TagError: '#FCD2CF',
      TagNeutral: '#EEF1F6',
      TagPrimary: '#EAF1FB',
      TagSuccess: '#DDFDED',
      TagWarning: '#FEF7B9',
      TableRowHover: '#F8F9FB',
      TableFooter: '#EEF1F6',
      Tooltip: '#1F2329'
    },
    BorderColor: {
      Error: '#DF320C',
      ButtonLinkHover: '#165ECC',
      ButtonLinkDestructiveHover: '#C61A0B',
      ButtonNeutral: '#CDD3DD',
      ButtonNeutralDisabled: '#809050',
      ButtonNeutralHover: '#165ECC',
      Checkbox: '#6A7381',
      CheckboxChecked: '#2F73DA',
      CheckboxDisabled: '#CDD3DD',
      ChipDefault: '#6A7381',
      ChipDefaultHover: '#E4E8EE',
      ChipDefaultActive: '#EAF1FB',
      ChipDefaultDisabled: '#A8B1BD',
      DropdownDisabled: 'rgba(203, 211, 223, 0.55)',
      Input: '#6A7381',
      InputDisabled: 'rgba(203, 211, 223, 0.55)',
      InputError: '#DF320C',
      InputFocus: '#2F73DA',
      InputHover: '#6A7381',
      SelectionBoxOutline: '#E4E8EE',
      SelectionBoxFocusedSelected: '#2F73DA',
      SelectionBoxDisabled: '#E4E8EE',
      SelectionBoxDisabledSelected: '#A8B1BD',
      Radio: '#6A7381',
      RadioChecked: '#2F73DA',
      RadioDisabled: '#CDD3DD',
      RadioDisabledChecked: '#A8B1BD',
      Switch: '#6A7381',
      SwitchDisabled: '#CDD3DD',
      TabActive: '#2F73DA',
      TableHeader: '#CDD3DD',
      TableCell: '#EEF1F6'
    },
    TextColor: {
      Active: '#2F73DA',
      ActiveHover: '#165ECC',
      Default: '#121417',
      Disabled: '#809050',
      Error: '#DF320C',
      Secondary: '#49505A',
      Avatar: '#121417',
      ButtonDestructive: '#FFFFFF',
      ButtonDestructiveDisabled: '#A8B1BD',
      ButtonLink: '#2F73DA',
      ButtonLinkHover: '#165ECC',
      ButtonLinkTertiary: '#49505A',
      ButtonLinkDestructive: '#DF320C',
      ButtonLinkDestructiveHover: '#C61A0B',
      ButtonNeutral: '#2F73DA',
      ButtonNeutralDisabled: '#bababa',
      ButtonNeutralHover: '#165ECC',
      ButtonPrimary: '#FFFFFF',
      ButtonPrimaryDisabled: '#689138',
      ButtonTransparent: '#2F73DA',
      ButtonTransparentDisabled: '#6A7381',
      ButtonTransparentHover: '#165ECC',
      ButtonTransparentTertiary: '#49505A',
      ChipDefault: '#121417',
      ChipDefaultActive: '#165ECC',
      ChipDefaultDisabled: '#A8B1BD',
      DropdownMenuItemActive: '#2F73DA',
      DropdownMenuItemDisabled: '#A8B1BD',
      InputErrorMessage: '#DF320C',
      InputHelpText: '#6A7381',
      InputLabel: '#6A7381',
      InputPlaceholder: '#6A7381',
      LeftNavItemActive: '#165ECC',
      ModalClose: '#121417',
      SelectionBoxDisabled: '#A8B1BD',
      TabActive: '#2F73DA',
      TagError: '#AE0A0A',
      TagNeutral: '#49505A',
      TagPrimary: '#165ECC',
      TagSuccess: '#027357',
      TagWarning: '#C33E01',
      Tooltip: '#FFFFFF'
    }
  }; // core token changes propigate down but leaf token changes take precedent

  var tokenList = (0, _utils.expandTokens)(tokenOverrides);
  var partition = (0, _utils.splitTokens)(tokenList);
  var coreTokens = (0, _utils.collapseTokens)(partition.coreTokens); // const leafTokens = collapseTokens(partition.leafTokens)

  var targetSpecificCore = (0, _mods.getTargetSpecificTokens)(target, coreTokens);
  var tokenSections = getTokenSections(theme, targetSpecificCore);
  var builtTokens = (0, _utils.deepMerge)(targetSpecificCore, tokenSections); // const finalTokens = deepMerge(builtTokens, leafTokens)

  return builtTokens;
};

exports.buildTheme = buildTheme;
var light = buildTheme('light');
exports.light = light;
var dark = buildTheme('dark');
exports.dark = dark;