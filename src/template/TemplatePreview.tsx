import * as React from 'react'

import * as styles from './TemplatePreview.module.css'

interface Props {
  isSelected?: boolean
  onSelect: () => void
  subtitle: string
  title: string
  meta?: Array<{ key: string; value: any }>
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

        {props.meta && (
          <dl className={styles.meta}>
            {props.meta.map((field, idx) => (
              <React.Fragment key={String(idx)}>
                <dd>{field.key}</dd>
                <dt>{field.value}</dt>
              </React.Fragment>
            ))}
          </dl>
        )}
      </div>
    </a>
  )
}

export default TemplatePreview
