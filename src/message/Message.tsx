import * as React from 'react'
import { MdWarning, MdErrorOutline, MdMood } from 'react-icons/md'
import * as styles from './Message.module.css'

interface Props {
  children?: JSX.Element | string
  icon?: () => JSX.Element
  title: JSX.Element | string
  type?: 'default' | 'error' | 'warning' | 'success'
}

const ICON_TYPES = ['error', 'warning', 'success']

export const Message = function(props: Props) {
  const { title, icon: Icon, children, type = 'default' } = props
  const hasIcon = Icon || ICON_TYPES.indexOf(type) > -1
  return (
    <div className={styles[type]}>
      <div className={styles.inner}>
        {hasIcon && (
          <div className={styles.icon}>
            {Icon && <Icon />}
            {!Icon && type === 'warning' && <MdWarning />}
            {!Icon && type === 'error' && <MdErrorOutline />}
            {!Icon && type === 'success' && <MdMood />}
          </div>
        )}
        <div className={styles.content}>
          {title && <h4 className={styles.title}>{title}</h4>}
          {!title && type === 'error' && <h4 className={styles.title}>Error</h4>}
          {!title && type === 'warning' && <h4 className={styles.title}>Warning</h4>}
          <div>{children}</div>
        </div>
      </div>
    </div>
  )
}
