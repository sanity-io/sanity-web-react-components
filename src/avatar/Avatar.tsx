import * as React from 'react'
import Placeholder from './Placeholder'

import * as styles from './Avatar.module.css'

interface Props {
  image?: {
    src: string
    alt: string
  }
  size?: 'small' | 'large'
}

function Avatar(props: Props) {
  return (
    <span className={styles[props.size || 'root']}>
      {props.image && <img src={props.image.src} />}
      {!props.image && <Placeholder />}
    </span>
  )
}

export default Avatar
