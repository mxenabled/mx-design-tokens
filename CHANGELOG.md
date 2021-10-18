# MX Design Tokens - Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [10.2.2] - 10-15-2021

### Updated

- Updated the dark background for the tooltip to `neutral900`, as per design.

## [10.2.1] - 10-12-2021

### Fixed

- Fixed the font size token for breadcrumbs

## [10.2.0] - 10-11-2021

### Added

- Added tokens for the Breadcrumbs component

## [10.1.1] - 09-29-2021

### Added

- Added token for the tooltip `boxShadow` to display `'none'` when theme is set to dark.

## [10.1.0] - 09-07-2021

### Added

- Added core and BackgroundColor tokens for Category colors

## [10.0.0] - 07-08-2021

### Changed

**Breaking Change** — _`mx-design-tokens 10.0.0` works in conjunction with `@kyper/tokenprovider 3.0.0` or greater._

The following breaking changes have been made to the `buildTheme` function...

- Removed the `customColors` and `customFonts` properties
- Added a single `tokenOverrides` property so that all tokens may be customized instead of just colors and fonts
  - Core token changes will automatically propagate down the tree
  - Leaf token changes will take precedent over any core propagations
  - New tokens will be appended

## [9.0.1] - 05-28-2021

### Fixed

- The `Time` token values now append `ms` instead of `px` for `.css` and `.scss` output

## [9.0.0] - 05-27-2021

### Added

- SCSS output files
- CSS output files

### Updated

- DOCS output script
- JSON output script
- use the latest babel dev dependencies

---

## [8.11.0] - 05-14-2021

### Added

- Added Radio token to backgroundColor tokens for use with the radio button after a css refactor.
- Add missing Radio borderColor token

---

## [8.10.1] - 05-13-2021

### Added

- Added SelectionBoxDisabled borderColor token

---

## [8.10.0] - 05-11-2021

### Added

- Added new tokens for the SelectionBox component

---

## [8.9.0] - 05-11-2021

### Added

- BorderColor and BackgroundColor now have an Error token that should be used by most components

### Updated

- The BoxShadow tokens were updated to the latest ones from Figma

---

## [8.8.0] - 05-06-2021

### Added

- Added new tokens to support the new Chip component

---

## [8.7.0] - 12-11-2020

### Added

- Adds a new tokens `MessageBoxBrand` to replace `MessageBoxHelp`.

### Fixed

- Fixes the `MessageBoxHelp` token using brand color instead of primary

---

## [8.6.1] - 09-09-2020

### Fixed

- Fix bad publish

---

## [8.6.0] - 09-09-2020

### Added

- Letter Spacing tokens to core to support uppercase font styles
- `LetterSpacing.Uppercase`
- `LetterSpacing.Small`
- `LetterSpacing.Tiny`
- `LetterSpacing.XSmall`

---

## [8.5.0] - 09-09-2020

### Added

- Add the Tag primary color and background color tokens
- Rename Tag tokens to Tag Neutral

---

## [8.4.0] - 09-08-2020

### Added

- Add the Tag text colors and background color tokens

---

## [8.3.0] - 08-28-2020

### Added

- Add the Chart colors tokens

---

## [8.2.0] - 08-28-2020

### Added

- Added text color, background color and border color for destructive link button variant
- `BackgroundColor.ButtonLinkDestructiveHover`
- `BorderColor.ButtonLinkDestructiveHover`
- `TextColor.ButtonLinkDestructive`
- `TextColor.ButtonLinkDestructiveHover`

---

## [8.1.1] - 08-03-2020

### Added

- Added the Primary color tokens back for backwards compatability and usage

---

## [8.1.0] - 07-29-2020

### Added

- Added MessageBox component tokens
- `BackgroundColor.MessageBox`
- `BackgroundColor.MessageBoxHelp`
- `BackgroundColor.MessageBoxError`
- `BackgroundColor.MessageBoxSuccess`

---

## [8.0.0] - 07-15-2020

### Changed

- Replaces Primary100-500 with Brand100-500 to be used when the colors need to reflect branding.

---

## [7.1.2] - 07-05-2020

### Fixed

- Bad publish of 7.1.1

---

## [7.1.1] - 07-10-2020

### Updated

- `CheckboxLabelMarginLeft` and `CheckboxLabelMarginLeft` now use `XSmall` spacing to fit design

---

## [7.1.0] - 07-07-2020

### Added

- `Font` in the core
- `customFonts` argument to buildTheme to override fonts

---

## [7.0.0] - 06-29-2020

### Added

- `BorderRadius.XLarge`
- `BorderRadius.CardRounded`

### Changed

- `BorderRadius.Large` changed to `8px`.

---

## [6.4.0] - 06-23-2020

### Added

- `BackgroundColor.TabDivider`

---

## [6.3.1] - 06-09-2020

### Fixed

- Changed InputLabelMarginLeft to `XSmall` spacing because `Small` was the incorrect size.

---

## [6.3.0] - 05-27-2020

### Added

- `BackgroundColor.TableHover`
- `BackgroundColor.TableFooter`
- `BorderColor.TableHeader`
- `BorderColor.TableCell`
- `Spacing.TableCell`
- `Spacing.TableCellActionMargin`
- `Spacing.TableFooterPaddingTop`
- `Spacing.TableFooterPaddingSide`

### Changed

- `Warning400` value updated to `#E07C02` to meet a 3:1 contrast ratio on white.

---

## [6.2.1] - 05-26-2020

### Fixed

- New changes in `6.2.0` weren't compiled correctly. This release fixed the bad release

---

## [6.2.0] - 05-26-2020

### Added

- `BackgroundColor.ModalCloseHover`

---

## [6.1.3] - 05-21-2020

### Changed

- Organized tokens alphabetically with global tokens at the top of each file.

---

## [6.1.2] - 05-07-2020

### Fixed

- Bad publish of 6.1.1
- Add script to maybe prevent this from happening again.

---

## [6.1.1] - 05-07-2020

### Fixed

- Corrected typo on `BackgroundColor.DropdownMenuItemActive`.

---

## [6.1.0] - 04-22-2020

### Added

- `BackgroundColor.Avatar`
- `TextColor.Avatar`

---

## [6.0.2] - 04-21-2020

Fix bad publish of 6.0.1

---

## [6.0.1] - 04-21-2020

### Changed

- `BackgroundColor.RadioChecked` in dark mode is now `Neutral900`

---

## [6.0.0] - 04-06-2020

### Added

- Organizational comments to background-color token file.
- `BackgroundColor.InputChip`
- `BackgroundColor.InputChipHover`
- `BackgroundColor.ModalClose`
- `BackgroundColor.DropdownMenu`
- `BackgroundColor.DropdownMenuItemHover`
- `BackgroundColor.DropdownMenuItemActive`
- `BorderRadius.DropdownMenu`
- `BorderRadius.DropdownMenuItem`
- `BorderRadius.DropdownChip`
- `TextColor.DropdownMenuItemActive`
- `TextColor.DropdownMenuItemDisabled`
- `TextColor.ModalClose`

### Removed

- `BorderColor.Dropdown`
- `BorderColor.DropdownHover`
- `BorderColor.DropdownFocus`
- `BorderColor.DropdownError`
- `FontSize.DropdownToggle`
- `FontSize.DropdownItems`
- `Spacing.DropdownToggle`
- `Spacing.DropdownItemPaddingTopBottom`
- `Spacing.DropdownItemPaddingLeftRight`

---

## [5.0.0] - 03-20-2020

### Added

- `core.Resolution` exports the int version of `core.MediaQuery`.
- Ability to pass in a build `target` to the buildTheme function.
- Exports `targets` const for use in other repos.
- `core.LineHeight` accepts the `REACT` target to add the `px` definition.
- `core.BoxShadow` accepts `target` with the current focus being `REACT`. Exploration still required.
- `core.Easing` accepts `target`. Still exploring non web solutions.
- `InputPaddingTop`
- `InputPaddingRight`
- `InputPaddingBottom`
- `InputPaddingLeft`
- `InputLabelPaddingLeft`
- `InputLabelPaddingRight`

### Changed

- Argument order of `buildTheme`.
- `core.Time.*` is now an int without the `ms`.
- `core.MediaQuery.*` includes `px` as it's implied web values.

### Removed

- Removed `core.BorderRadius.Rounded` as a circle is created completely differently across the different platforms.
- Removed `InputPadding` in favor of individually specified tokens.
- Removed `InputLabelPadding` in favor of individually specified tokens.
- Removed `BorderRadius.Radio` as it used `Rounded`.
- Removed `BorderRadius.Switch` as it used `Rounded`.

---

## [4.1.0] - 03-16-2020

### Added

- CHANGELOG.md available. [issue](https://github.com/mxenabled/mx-design-tokens/issues/18)

### Fixed

- Makes custom colors available to the core color set.

---

## [4.0.1] - 03-05-2020

### Fixed

- Updates incorrect values for input labels.

---

## [4.0.0] - 03-05-2020

### Added

- Styles for input labels.

### Changed

- Styles for input labels.
- Neutral colors changed for a11y.

### Removed

- `InputLabelMarginBottom` style.
