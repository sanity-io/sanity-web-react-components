import * as React from 'react'
import { classNames } from '../lib/classNameUtils'

import * as styles from './Spinner.module.css'

interface Props {
  className?: string
}

function Spinner(props: Props) {
  return (
    <svg className={classNames(styles.root, props.className)} viewBox="0 0 41 41" width="40px" height="40px">
      <circle
        className={styles.circle}
        strokeWidth="1"
        cx="20.5"
        cy="20.5"
        r="20"
        strokeLinecap="round"
        fill="none"
        stroke="black"
      />
    </svg>
  )
}

export default Spinner
