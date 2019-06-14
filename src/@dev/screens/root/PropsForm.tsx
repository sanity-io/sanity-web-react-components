import * as React from 'react'
import { Field } from './field'

import { FieldType } from '../../lib/schema/types'
import { OnChangeFunction } from './field'

interface Props {
  data: any
  fields: FieldType[]
  onChange: OnChangeFunction
}

function PropsForm(props: Props) {
  const { data, fields, onChange } = props
  return (
    <div>
      {fields.map(field => (
        <Field key={field.name} field={field} onChange={onChange} value={data[field.name]} />
      ))}
    </div>
  )
}

export default PropsForm
