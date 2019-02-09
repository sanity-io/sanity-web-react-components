import * as React from 'react'

interface Props {
  autoComplete?: boolean
  autoCorrect?: boolean
  type?: 'text' | 'password'
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
      autoComplete={props.autoComplete === false ? 'off' : undefined}
      autoCorrect={props.autoCorrect === false ? 'off' : undefined}
      className={className}
      name={props.name}
      type={props.type || 'text'}
      value={props.value}
      onChange={props.onChange}
    />
  )
}

export default StringInput
