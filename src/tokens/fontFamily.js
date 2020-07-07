const light = core => ({
  Button: core.Font.Regular
})

const dark = core => ({
  ...light(core),
})

export default {
  light,
  dark,
}
