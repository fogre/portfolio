const withImages = require('next-images')
const withTM = require('next-transpile-modules')(['three'])

module.exports = withTM(
  withImages({
    esModule: true,
    webpack(config, options) {
      return config
    }
  })
)
