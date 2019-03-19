import * as React from 'react'
import BooleanField from './BooleanField'
import NumberField from './NumberField'
import StringField from './StringField'
import TextField from './TextField'

import { BooleanType, FieldType, NumberType, StringType, TextType } from '../../../lib/schema/types'
import { OnChangeFunction } from './types'

function Field(props: { field: FieldType; onChange: OnChangeFunction; value: any }) {
  const { field, onChange, value } = props
  switch (field.type) {
    case 'boolean':
      return <BooleanField field={field as BooleanType} onChange={onChange} value={value} />
    case 'number':
      return <NumberField field={field as NumberType} onChange={onChange} value={value} />
    case 'string':
      return <StringField field={field as StringType} onChange={onChange} value={value} />
    case 'text':
      return <TextField field={field as TextType} onChange={onChange} value={value} />
    default:
      return <div>Unknown type: {field.type}</div>
  }
}

export default Field
