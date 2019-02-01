import * as React from 'react'

import * as styles from './Icon.module.css'

function ChevronDownIcon() {
  return (
    <svg
      viewBox="0 0 25 25"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      width="1em"
      height="1em"
      className={styles.root}
    >
      <path d="M20 9L12.5 16.5L5 9" stroke="currentColor" className={styles.nonScaling} />
    </svg>
  )
}

export default ChevronDownIcon
