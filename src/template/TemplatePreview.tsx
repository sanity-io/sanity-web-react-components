import * as React from 'react'

import * as styles from './TemplatePreview.module.css'

interface Props {
  isSelected?: boolean
  onSelect: () => void
  subtitle: string
  title: string
}

function TemplatePreview(props: Props) {
  return (
    <a
      className={props.isSelected ? styles.selected : styles.root}
      href=""
      onClick={evt => {
        evt.preventDefault()
        props.onSelect()
      }}
    >
      <div className={styles.image} />
      <div className={styles.text}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.subtitle}>{props.subtitle}</div>
      </div>
    </a>
  )
}

export default TemplatePreview
