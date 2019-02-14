import * as React from 'react'
import * as styles from './Button.module.css'

interface BaseProps {
  children: any
  disabled?: boolean
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
    className: styles.root,
    onClick: disabled
      ? (evt: any) => {
          if (props.type === 'link') {
            evt.preventDefault()
          }
        }
      : onClick,
  }

  if (props.size === 'large') commonProps.className = styles.large
  if (props.size === 'small') commonProps.className = styles.small

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
