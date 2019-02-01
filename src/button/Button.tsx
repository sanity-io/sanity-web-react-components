import * as React from 'react'

import * as styles from './Button.module.css'

interface BaseProps {
  children: any
  disabled?: boolean
  onClick?: () => void
  size?: 'normal' | 'large'
}

interface LinkProps extends BaseProps {
  type: 'link'
  href: string
}

interface ButtonProps extends BaseProps {
  type?: 'button' | 'reset' | 'submit'
}

export type Props = LinkProps | ButtonProps

const noop = () => void 0

const Button = (props: Props) => {
  const { children, onClick, disabled } = props
  const commonProps = {
    className: `sanity-button ${styles.root}`,
    onClick: !disabled ? onClick : noop,
  }
  if (props.size === 'large') commonProps.className += ` sanity-button--large`
  if (props.type === 'link') {
    return (
      <a {...commonProps} href={props.href}>
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
