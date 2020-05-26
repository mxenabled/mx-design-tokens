# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [6.2.0] - 05-07-2020

### Added
- `BackgroundColor.ModalCloseHover`

## [6.1.3] - 05-07-2020

### Changed
- Organized tokens alphabetically with global tokens at the top of each file. 

## [6.1.2] - 05-07-2020

### Fixed
- Bad publish of 6.1.1
- Add script to maybe prevent this from happening again.

## [6.1.1] - 05-07-2020

### Fixed
- Corrected typo on `BackgroundColor.DropdownMenuItemActive`.

## [6.1.0] - 04-22-2020

### Added
- `BackgroundColor.Avatar`
- `TextColor.Avatar`

## [6.0.2] - 04-21-2020

Fix bad publish of 6.0.1

## [6.0.1] - 04-21-2020

### Changed
- `BackgroundColor.RadioChecked` in dark mode is now `Neutral900`

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


## [4.1.0] - 03-16-2020

### Added
- CHANGELOG.md available. [issue](https://github.com/mxenabled/mx-design-tokens/issues/18)

### Fixed
- Makes custom colors available to the core color set.

## [4.0.1] - 03-05-2020

### Fixed
- Updates incorrect values for input labels.

## [4.0.0] - 03-05-2020

### Added
- Styles for input labels.

### Changed
- Styles for input labels.
- Neutral colors changed for a11y.

### Removed
- `InputLabelMarginBottom` style.

