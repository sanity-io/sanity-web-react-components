import * as React from 'react'

import { NumberType } from '../../../lib/schema/types'
import { OnChangeFunction } from './types'

import * as styles from './Field.module.css'

function NumberField(props: { field: NumberType; onChange: OnChangeFunction; value?: string }) {
  const { onChange, value } = props
  const { label, name, options } = props.field

  function handleChange(evt: any) {
    onChange(name, Number(evt.target.value))
  }

  let input: any

  switch (true) {
    case options !== undefined:
      input = (
        <select name={name} onChange={handleChange} value={value}>
          {options &&
            options.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
        </select>
      )
      break
    default:
      input = (
        <input
          className="sanity-text-input sanity-text-input--small"
          type="text"
          name={name}
          onChange={handleChange}
          value={value || ''}
        />
      )
      break
  }

  return (
    <div className={styles.root}>
      <label>
        <div>
          <label>{label}</label>
        </div>
        {input}
      </label>
    </div>
  )
}

export default NumberField
