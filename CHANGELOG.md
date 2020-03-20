# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [5.0.0] - 03-20-2020

### Added
- Ability to pass in a build `target` to the buildTheme function.
- `core.LineHeight` accepts the `web` target to add the `px` definition.
- `InputPaddingTop`
- `InputPaddingRight`
- `InputPaddingBottom`
- `InputPaddingLeft`
- `InputLabelPaddingLeft`
- `InputLabelPaddingRight`

### Changed
- `core.Time.*` is now an int without the `ms`.

### Removed
- Removed `core.BorderRadius.Rounded` as a circle is created completely differently across the different platforms.
- Removed `InputPadding` in favor of individually specified tokens.
- Removed `InputLabelPadding` in favor of individually specified tokens.


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

