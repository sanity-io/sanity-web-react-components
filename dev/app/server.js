const express = require('express')
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const App = require('./App').default

function encode(obj) {
  return encodeURIComponent(JSON.stringify(obj))
}

function create() {
  const app = express()

  // const highlightJsTheme = 'atom-one-light'
  const highlightJsTheme = 'xcode'

  app.get('/*', (req, res) => {
    try {
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

  return app
}

module.exports = { create }
