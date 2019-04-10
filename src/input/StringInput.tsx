import * as React from 'react'

interface Props {
  autoComplete?: boolean
  autoCorrect?: boolean
  disabled?: boolean
  invalid?: boolean
  name: string
  onChange?: (evt: any) => void
  placeholder?: string
  size?: 'normal' | 'large' | 'small'
  type?: 'text' | 'password'
  value?: string
}

function StringInput(props: Props) {
  let className = `sanity-text-input`
  if (props.size === 'large') className += ` sanity-text-input--large`
  if (props.size === 'small') className += ` sanity-text-input--small`
  const dataProps: { [key: string]: any } = {}
  if (props.invalid) dataProps['data-invalid'] = true
  return (
    <input
      autoComplete={props.autoComplete === false ? 'off' : undefined}
      autoCorrect={props.autoCorrect === false ? 'off' : undefined}
      className={className}
      disabled={props.disabled}
      name={props.name}
      onChange={props.onChange}
      placeholder={props.placeholder}
      type={props.type || 'text'}
      value={props.value}
      {...dataProps}
    />
  )
}

export default StringInput
