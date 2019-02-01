const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin')
const path = require('path')

module.exports = (baseConfig, env, config) => {
  config.module.rules = [
    {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: [/node_modules/, path.resolve(__dirname, '../dev')],
    },
    {
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
    },
    {
      // Match "*.css" that is not "*.module.css"
      test: /^(?![.*]\.module)([^.]+)\.css$/,
      use: ['style-loader', 'css-loader', 'postcss-loader'],
    },
  ]
  config.resolve.extensions.push('.ts', '.tsx')
  config.plugins.push(new TSDocgenPlugin())
  return config
}
