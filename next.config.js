const { createSecureHeaders } = require('next-secure-headers')

const CSPdirectives = {
  defaultSrc: "'self'",
  styleSrc: ["'self'", "'unsafe-inline'"],
  scriptSrc: process.env.NODE_ENV === 'development' 
    ? ["'self'", "'unsafe-eval'"]
    : ["'self'"],
  fontSrc: "'self'",
  imgSrc: "'self'",
  baseUri: "self",
  frameAncestors: true,
}

module.exports = {
  async headers() {
    return [{
      source: '/(.*)',
      headers: createSecureHeaders({
          contentSecurityPolicy: {
            directives: CSPdirectives,
            frameGuard: 'deny',
            noopen: 'noopen',
            nosniff: 'nosniff',
            forceHTTPSRedirect: [
              true,
              { maxAge: 60 * 60 * 24 * 360, includeSubDomains: true },
            ],
        },
      })
    }]
  },
}