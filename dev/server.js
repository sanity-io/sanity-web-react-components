const chokidar = require('chokidar')
const express = require('express')
const fs = require('fs')
const path = require('path')
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('./webpack.config')

const appPath = path.resolve(__dirname, './app')
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

function encode(obj) {
  return encodeURIComponent(JSON.stringify(obj))
}

// const highlightJsTheme = 'atom-one-light'
const highlightJsTheme = 'xcode'

app.get('/*', (req, res) => {
  try {
    const { App } = require('./app')
    const props = { path: req.path, query: req.query }
    const html = ReactDOMServer.renderToString(React.createElement(App, props))
    res.send(`<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>@sanity-web-react-components</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
    <link rel="icon" type="image/png" href="/favicon.png">
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.2.0/styles/default.min.css">
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.14.2/styles/${highlightJsTheme}.min.css">
  </head>
  <body>
    <div id="root" data-props="${encode(props)}">${html}</div>
    <script src="/main.js"></script>
  </body>
</html>`)
  } catch (err) {
    res.status(500)
    res.send(err.stack)
  }
})

app.listen(8080, err => {
  if (err) panic(err)
  else logStartMessage()
})

function panic(err) {
  console.error(err)
  process.exit(1)
}

function logStartMessage() {
  console.log(`Listening at http://localhost:8080`)
}

// Setup server-side watcher
const sourceWatcher = chokidar.watch(sourcePath)
sourceWatcher.on('ready', () => {
  sourceWatcher.on('all', () => {
    Object.keys(require.cache)
      .filter(key => key.startsWith(sourcePath))
      .forEach(key => delete require.cache[key])
  })
})
const appWatcher = chokidar.watch(appPath)
appWatcher.on('ready', () => {
  appWatcher.on('all', () => {
    Object.keys(require.cache)
      .filter(key => key.startsWith(appPath))
      .forEach(key => delete require.cache[key])
  })
})
