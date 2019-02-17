import * as React from 'react'

import * as styles from './ZeitLogo.module.css'

function ZeitLogo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="0.83"
          y1="31.57"
          x2="0.61"
          y2="31.84"
          gradientTransform="matrix(113, 0, 0, -100, -56, 3200)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" />
          <stop offset="1" stopColor="#fff" />
        </linearGradient>
      </defs>
      <circle cx="16" cy="16" r="16" />
      <polygon className={styles.fill} points="16 7.12 24.38 21.95 7.62 21.95 16 7.12" />
    </svg>
  )
}

export default ZeitLogo
