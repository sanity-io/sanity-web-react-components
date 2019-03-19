const path = require('path')
const webpack = require('webpack')

module.exports = {
  context: path.resolve(__dirname, '..'),
  mode: 'development',
  devtool: 'eval-source-map',
  entry: {
    main: ['webpack-hot-middleware/client?reload=true', './dev/client.tsx'],
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
    ],
  },
  resolve: {
    alias: {
      dev: __dirname,
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
}
