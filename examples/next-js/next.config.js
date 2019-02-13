const withCSS = require('@zeit/next-css')
const withTranspileModules = require('next-transpile-modules')

module.exports = withCSS(
  withTranspileModules({
    cssModules: true,
    transpileModules: ['sanity-web-react-components', 'sanity-web-styles'],
    webpack(config, options) {
      return {
        ...config,
        module: {
          ...config.module,
          rules: config.module.rules.map(rule => {
            if (String(rule.test) === '/\\.css$/') {
              return {
                oneOf: [
                  { ...rule, test: /\.module\.css$/ },
                  {
                    ...rule,
                    test: /\.css$/,
                    use: rule.use.map(conf => {
                      if (typeof conf === 'object' && conf.loader === 'css-loader') {
                        return {
                          ...conf,
                          options: { ...conf.options, modules: false },
                        }
                      }
                      return conf
                    }),
                  },
                ],
              }
            }
            return rule
          }),
        },
      }
    },
  }),
)
