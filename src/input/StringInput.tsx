import * as React from 'react'

interface Props {
  name: string
  size?: 'normal' | 'large' | 'small'
  value?: string
  onChange?: (evt: any) => void
}

function StringInput(props: Props) {
  let className = `sanity-text-input`
  if (props.size === 'large') className += ` sanity-text-input--large`
  if (props.size === 'small') className += ` sanity-text-input--small`
  return (
    <input
      className={className}
      name={props.name}
      type="text"
      value={props.value}
      onChange={props.onChange}
    />
  )
}

export default StringInput
