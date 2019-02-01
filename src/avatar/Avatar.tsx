import * as React from 'react'

import * as styles from './Avatar.module.css'

interface Props {
  image?: {
    src: string
    alt: string
  }
  size?: 'small' | 'normal' | 'large'
}

function Avatar(props: Props) {
  let className = ''
  switch (props.size) {
    case 'large':
      className = styles.large
      break
    case 'small':
      className = styles.small
      break
    default:
      className = styles.root
      break
  }
  return <span className={className}>{props.image && <img src={props.image.src} />}</span>
}

export default Avatar
