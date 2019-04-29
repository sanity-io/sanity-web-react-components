import * as React from 'react'

interface Props {
  disabled?: boolean
  id?: string,
  name: string
  checked: boolean
  onChange: (evt: any) => void
}

function CheckboxInput(props: Props) {
  return (
    <input
      className="sanity-checkbox-input"
      disabled={props.disabled}
      id={props.id}
      type="checkbox"
      name={props.name}
      checked={props.checked}
      onChange={props.onChange}
    />
  )
}

export default CheckboxInput
