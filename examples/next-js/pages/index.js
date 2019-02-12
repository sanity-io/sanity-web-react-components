import React from 'react'

// NOTE: Import base styles before view components
import './layout.css'

// NOTE: For an unknown reason, Next.js requires the full path of the root module
import { SiteFooter, SiteHeader } from 'sanity-web-react-components/lib/es'

import styles from './index.module.css'

function Home() {
  return (
    <>
      <SiteHeader />
      <div className={styles.root}>Content</div>
      <SiteFooter />
    </>
  )
}

export default Home
