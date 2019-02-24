import * as React from 'react'

interface Props {
  disabled?: boolean
  name: string
  checked: boolean
  onChange: (evt: any) => void
}

function CheckboxInput(props: Props) {
  return (
    <input
      className="sanity-checkbox-input"
      disabled={props.disabled}
      type="checkbox"
      name={props.name}
      checked={props.checked}
      onChange={props.onChange}
    />
  )
}

export default CheckboxInput
