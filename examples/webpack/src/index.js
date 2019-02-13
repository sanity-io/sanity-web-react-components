import React from 'react'
import ReactDOM from 'react-dom'
import { SiteFooter, SiteHeader } from 'sanity-web-react-components'

import './layout.css'
import styles from './index.module.css'

function App() {
  return (
    <>
      <SiteHeader />
      <div className={styles.root}>Content</div>
      <SiteFooter />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
