import * as React from 'react'
import { classNames } from '../lib/classNameUtils'

import * as styles from './Spinner.module.css'

interface Props {
  className?: string
}

function Spinner(props: Props) {
  return (
    <svg className={classNames(styles.root, props.className)} viewBox="0 0 40 40">
      <circle cx="20" cy="20" r="19.5" />
    </svg>
  )
}

export default Spinner
