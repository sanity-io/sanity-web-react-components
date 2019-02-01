import * as React from 'react'

import * as styles from './Icon.module.css'

const HamburgerIcon = () => (
  <svg
    viewBox="0 0 25 25"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    width="1em"
    height="1em"
    className={styles.root}
  >
    <path d="M5 7.5H20" stroke="currentColor" className={styles.nonScaling} />
    <path d="M5 12.5H20" stroke="currentColor" className={styles.nonScaling} />
    <path d="M5 17.5H20" stroke="currentColor" className={styles.nonScaling} />
  </svg>
)

export default HamburgerIcon
