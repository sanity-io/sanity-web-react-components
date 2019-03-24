import * as React from 'react'
import * as ReactDOM from 'react-dom'

// Import base CSS before components
import './base.css'

import App from './App'

function decode(str: string) {
  return JSON.parse(decodeURIComponent(str))
}

const rootElm = document.getElementById('root')
if (!rootElm) throw new Error('Missing #root element')

const rawProps = rootElm.getAttribute('data-props')
if (!rawProps) throw new Error('Missing data-props')

const props = decode(rawProps)

ReactDOM.hydrate(<App {...props} />, rootElm)
