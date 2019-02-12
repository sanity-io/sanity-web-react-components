const withCSS = require('./next/with-css')
const withTranspileModules = require('next-transpile-modules')

module.exports = withCSS(
  withTranspileModules({
    transpileModules: ['sanity-web-react-components', 'sanity-web-styles'],
  }),
)
