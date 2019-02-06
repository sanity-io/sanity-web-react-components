// const path = require('path')
// const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin')
const util = require('util')

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  })

  // Replace built in rule
  config.module.rules = config.module.rules.map(rule => {
    if (String(rule.test) === '/\\.css$/') {
      return {
        // Match "*.css" that is not "*.module.css"
        test: /^(?![.*]\.module)([^.]+)\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      }
    }
    return rule
  })

  config.module.rules.push({
    test: /\.module\.css$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 1,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      },
      'postcss-loader',
    ],
  })

  config.resolve.extensions.push('.ts', '.tsx')

  // config.plugins.push(new TSDocgenPlugin())

  return config
}
