const light = core => ({
  Button: core.Font.Regular,
  Chip: core.Font.Semibold,
})

const dark = core => ({
  ...light(core),
})

export default {
  light,
  dark,
}
