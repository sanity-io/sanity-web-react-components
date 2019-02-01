import { Button } from '../'
import * as React from 'react'

import * as styles from './ServiceConnect.module.css'

interface Props {
  title: string
  description: string
  status: any
}

function ServiceConnect(props: Props) {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </div>
      <div className={styles.content}>
        <div className={styles.status}>
          <div>{props.status}</div>
        </div>
        <div className={styles.buttons}>
          <Button>Connect</Button>
        </div>
      </div>
    </div>
  )
}

export default ServiceConnect
