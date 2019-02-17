import * as React from 'react'
import * as styles from './Button.module.css'

interface BaseProps {
  children: any
  color?: 'red' | 'green' | 'blue'
  disabled?: boolean
  ghost?: boolean
  onClick?: (evt: any) => void
  size?: 'normal' | 'large' | 'small'
}

interface LinkProps extends BaseProps {
  type: 'link'
  href: string
}

interface ButtonProps extends BaseProps {
  type?: 'button' | 'reset' | 'submit'
}

export type Props = LinkProps | ButtonProps

const Button = (props: Props) => {
  const { children, onClick, disabled } = props
  const commonProps: any = {
    className: `${styles.root} sanity-button`,
    onClick: disabled
      ? (evt: any) => {
          if (props.type === 'link') {
            evt.preventDefault()
          }
        }
      : onClick,
  }

  // Apply ghost modifier
  if (props.ghost) commonProps.className += ` sanity-button--ghost`

  // Apply size modifier
  if (props.size === 'large') commonProps.className += ` sanity-button--large`
  if (props.size === 'small') commonProps.className += ` sanity-button--small`

  // Apply color modifier
  if (props.color === 'red') commonProps.className += ` sanity-button--red`
  if (props.color === 'green') commonProps.className += ` sanity-button--green`
  if (props.color === 'blue') commonProps.className += ` sanity-button--blue`

  if (props.type === 'link') {
    if (props.disabled) {
      commonProps['data-disabled'] = 'true'
    }
    return (
      <a {...commonProps} href={props.disabled ? undefined : props.href}>
        <span>{children}</span>
      </a>
    )
  }
  return (
    <button {...commonProps} disabled={disabled} type={props.type || 'button'}>
      <span>{children}</span>
    </button>
  )
}

export default Button
