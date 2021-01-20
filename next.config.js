const withImages = require('next-images')
const withTM = require('next-transpile-modules')
  ([
    'three',
    '@react-spring/core',
    '@react-spring/three',
    "react-use-gesture",
    'react-three-fiber'
  ])

module.exports = withTM(
  withImages({
    esModule: true,
    webpack: config => {
      config.module.rules.push({
        test: /react-spring/,
        sideEffects: true,
      })
      return config
    }
  })
)
