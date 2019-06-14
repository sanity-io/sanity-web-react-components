const chokidar = require('chokidar')
const express = require('express')
const path = require('path')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('./webpack.config')

const sourcePath = path.resolve(__dirname, '../src')

// HOOKS
require('module-alias/register')
require('css-modules-require-hook')({
  generateScopedName: '[name]__[local]___[hash:base64:5]',
})
require('ts-node').register({
  transpileOnly: true,
})

const app = express()

app.use(express.static(path.resolve(__dirname, '../node_modules/sanity-web-styles/dist')))

// WEBPACK
const webpackCompiler = webpack(webpackConfig)
app.use(
  webpackDevMiddleware(webpackCompiler, {
    hot: true,
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  }),
)
app.use(webpackHotMiddleware(webpackCompiler))

app.use((req, res, next) => {
  require('../src/@dev/server').create()(req, res, next)
})

app.listen(8080, err => {
  if (err) panic(err)
  else console.log(`Listening at http://localhost:8080`)
})

function panic(err) {
  console.error(err)
  process.exit(1)
}

// Setup server-side watcher
const watcher = chokidar.watch(sourcePath)
watcher.on('ready', () => {
  watcher.on('all', () => {
    console.log('Clearing require cache...')
    Object.keys(require.cache).forEach(key => {
      delete require.cache[key]
    })
  })
})
