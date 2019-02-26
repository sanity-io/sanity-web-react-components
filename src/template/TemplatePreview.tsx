import * as React from 'react'

import * as styles from './TemplatePreview.module.css'

interface Props {
  isSelected?: boolean
  subtitle: string
  title: string
}

function TemplatePreview(props: Props) {
  return (
    <a className={props.isSelected ? styles.selected : styles.root} href="">
      <div className={styles.image} />
      <div className={styles.text}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.subtitle}>{props.subtitle}</div>
      </div>
    </a>
  )
}

export default TemplatePreview
