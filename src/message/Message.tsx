import * as React from 'react'
import { MdWarning, MdErrorOutline, MdMood } from 'react-icons/md'
import * as css from './Message.module.css'

interface Props {
  title: JSX.Element | string
  children?: JSX.Element | string,
  icon?: any,
  kind?: 'default' | 'error' | 'warning' | 'success'
}

export const Message = function(props: Props) {
  const {title, icon, children, kind = 'default'} = props
  const Icon = icon
  return (
    <div className={css[kind]}>
      {Icon && (
        <div className={css.icon}>
          <Icon />
        </div>
      )}
      {!Icon &&
        kind === 'warning' && (
          <div className={css.icon}>
            <MdWarning />
          </div>
        )}
      {!Icon &&
        kind === 'error' && (
          <div className={css.icon}>
            <MdErrorOutline />
          </div>
        )}
      {!Icon &&
        kind === 'success' && (
          <div className={css.icon}>
            <MdMood />
          </div>
        )}
      <div className={css.content}>
        {title && <h4 className={css.title}>{title}</h4>}
        {!title && kind === 'error' && <h4 className={css.title}>Error</h4>}
        {!title && kind === 'warning' && <h4 className={css.title}>Warning</h4>}
        <div>{children}</div>
      </div>
    </div>
  )
}
