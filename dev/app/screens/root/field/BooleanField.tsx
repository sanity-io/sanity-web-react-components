import * as React from 'react'

import { BooleanType } from '../../../lib/schema/types'
import { OnChangeFunction } from './types'

import * as styles from './Field.module.css'

function BooleanField(props: { field: BooleanType; onChange: OnChangeFunction; value?: boolean }) {
  const { onChange, value } = props
  const { label, name } = props.field
  function handleChange(evt: any) {
    onChange(name, evt.target.checked)
  }
  return (
    <div className={styles.root}>
      <label>
        <input type="checkbox" onChange={handleChange} checked={value || false} /> {label}
      </label>
    </div>
  )
}

export default BooleanField
