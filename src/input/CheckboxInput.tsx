import * as React from 'react'

interface Props {
  name: string
  checked: boolean
  onChange: (evt: any) => void
}

function CheckboxInput(props: Props) {
  return (
    <input
      className="sanity-checkbox-input"
      type="checkbox"
      name={props.name}
      checked={props.checked}
      onChange={props.onChange}
    />
  )
}

export default CheckboxInput
