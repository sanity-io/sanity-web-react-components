import * as React from 'react'

import * as styles from './SanityLogo.module.css'

type Props = any

function SanityLogo(props: Props) {
  const rootClassName = [styles.root, props.className].filter(Boolean).join(' ')
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 685.78 138.32"
      className={rootClassName}
      {...props}
    >
      <polygon
        className={styles.half}
        points="512.64 48.97 512.64 136.08 484.51 136.08 484.51 63.77 512.64 48.97"
      />
      <polygon
        className={styles.quarter}
        points="136.18 138.26 224.91 92.03 215.7 69.88 150.57 102.35 136.18 138.26"
      />
      <polygon
        className={styles.quarter}
        points="484.5 63.77 555.82 26.61 543.78 5.86 484.5 35.37 484.5 63.77"
      />
      <polygon
        className={styles.half}
        points="283.65 42.06 283.65 136.08 256.83 136.08 256.83 2.18 283.65 42.06"
      />
      <polygon
        className={styles.half}
        points="176.82 36.88 136.17 138.27 115.26 119.96 163.7 2.18 176.82 36.88"
      />
      <polygon points="163.71 2.18 191.4 2.18 242.65 136.08 214.3 136.08 163.71 2.18" />
      <polygon points="287.81 2.18 346.9 93.66 346.9 136.08 256.83 2.18 287.81 2.18" />
      <rect x="397.49" y="2.19" width="27.92" height="133.9" />
      <polygon points="484.5 26.61 441.54 26.61 441.54 2.18 541.64 2.18 555.82 26.61 512.63 26.61 484.5 26.61" />
      <polyline
        className={styles.quarter}
        points="638.25 85.27 638.25 136.09 610.56 136.09 610.56 85.27"
      />
      <polygon points="610.56 85.27 657.45 2.18 686.88 2.18 638.25 85.27 610.56 85.27" />
      <polygon
        className={styles.half}
        points="610.56 85.27 562.36 2.18 592.67 2.18 625.32 59.11 610.56 85.27"
      />
      <path d="M11.25,17.64c0,18.58,11.51,29.73,34.55,35.58l24.42,5.66c21.81,5,35.12,17.45,35.12,37.73A38.53,38.53,0,0,1,97.2,121c0-20.23-10.47-31.17-35.7-37.73l-24-5.45c-19.19-4.37-34-14.61-34-36.64a38.3,38.3,0,0,1,7.76-23.58" />
      <polygon
        className={styles.half}
        points="346.9 86.8 346.9 2.18 373.73 2.18 373.73 136.09 346.9 136.09 346.9 86.8"
      />
      <path
        className={styles.half}
        d="M82.21,91.66c10.41,6.67,15,16,15,29.38-8.73,11-23.78,17.22-41.59,17.22-29.87,0-51-14.83-55.61-40.34H28.79c3.71,11.78,13.52,17.23,26.6,17.23,16,0,26.61-8.53,26.82-23.49"
      />
      <path
        className={styles.half}
        d="M26.21,45.28c-10-6.4-15-15.41-15-27.65C19.59,6.69,34,0,51.69,0c30.53,0,48.19,16.14,52.55,38.82H76.54C73.49,29.88,65.86,22.9,51.9,22.9c-14.88,0-25,8.66-25.69,22.38"
      />
    </svg>
  )
}

export default SanityLogo
