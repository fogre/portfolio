const withImages = require('next-images')
const withTM = require('next-transpile-modules')
  ([
    'three',
    '@react-spring/three',
    "react-use-gesture",
    'react-three-fiber'
  ])

module.exports = withTM(
  withImages({
    esModule: true,
    webpack(config, options) {
      return config
    }
  })
)
