import * as React from 'react'

import * as styles from './Spinner.module.css'

function Spinner() {
  return (
    <svg className={styles.root} viewBox="0 0 40 40">
      <circle cx="20" cy="20" r="18.5" />
    </svg>
  )
}

export default Spinner
