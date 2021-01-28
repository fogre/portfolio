const { createSecureHeaders } = require("next-secure-headers");
const withImages = require('next-images')
const withTM = require('next-transpile-modules')
  ([
    'three',
    '@react-spring/core',
    '@react-spring/three',
    "react-use-gesture",
    'react-three-fiber'
  ])

const CSPdirectives = {
  defaultSrc: "'self'",
  styleSrc: ["'self'", "'unsafe-inline'"],
  scriptSrc: "'self'",
  fontSrc: "'self'",
  imgSrc: "'self'",
  baseUri: "self",
  frameAncestors: true,
}

if (process.env.NODE_ENV !== 'production') {
  CSPdirectives.scriptSrc = ["'self'", "'unsafe-eval'"]
}

module.exports = withTM(
  withImages({
    esModule: true,
    async headers() {
      return [{
        source: "/(.*)",
        headers: createSecureHeaders({
            contentSecurityPolicy: {
              directives: CSPdirectives,
              frameGuard: "deny",
              noopen: "noopen",
              nosniff: "nosniff",
              forceHTTPSRedirect: [
                true,
                { maxAge: 60 * 60 * 24 * 360, includeSubDomains: true },
              ],
          },
        })
      }]
    },  
    webpack: config => {
      config.module.rules.push({
        test: /react-spring/,
        sideEffects: true,
      })
      return config
    }
  })
)
/*

    },*/