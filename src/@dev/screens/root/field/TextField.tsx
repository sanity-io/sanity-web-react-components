import * as React from 'react'

import { TextType } from '../../../lib/schema/types'
import { OnChangeFunction } from './types'

import * as styles from './Field.module.css'

function TextField(props: { field: TextType; onChange: OnChangeFunction; value?: string }) {
  const { onChange, value } = props
  const { label, name } = props.field

  function handleChange(evt: any) {
    onChange(name, evt.target.value)
  }

  return (
    <div className={styles.root}>
      <label>
        <div>
          <label>{label}</label>
        </div>
        <textarea
          className="sanity-text-input sanity-text-input--small"
          name={name}
          onChange={handleChange}
          rows={6}
          value={value || ''}
        />
      </label>
    </div>
  )
}

export default TextField
