import * as React from 'react'

import { CheckboxInput } from '../../../../../lib/cjs'
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
        <CheckboxInput name={name} checked={value || false} onChange={handleChange} /> {label}
      </label>
    </div>
  )
}

export default BooleanField
