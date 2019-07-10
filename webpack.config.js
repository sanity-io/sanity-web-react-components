const genericNames = require('generic-names')
const path = require('path')
const webpack = require('webpack')

const contextPath = path.resolve(__dirname, './')

const getLocalIdent = genericNames('[name]__[local]___[hash:base64:5]', {
  context: contextPath,
})

module.exports = {
  context: contextPath,
  mode: 'development',
  devtool: 'eval-source-map',
  entry: {
    main: ['webpack-hot-middleware/client?reload=true', './src/@dev/client.tsx'],
  },
  output: {
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.module\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
                getLocalIdent: (context, _, localName) => {
                  return getLocalIdent(localName, context._module.resource)
                },
              },
              importLoaders: 1,
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
    ],
  },
  resolve: {
    alias: {
      '@dev': path.resolve(contextPath, './src/@dev'),
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
}
