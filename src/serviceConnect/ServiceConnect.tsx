import { Button } from '../'
import * as React from 'react'

import * as styles from './ServiceConnect.module.css'

interface Props {
  title: string
  description: string
  isConnected: boolean
  status: any
  onConnectClick: () => void
  onDisconnectClick: () => void
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
          {!props.isConnected && <Button onClick={props.onConnectClick}>Connect</Button>}
          {props.isConnected && <Button onClick={props.onDisconnectClick}>Disconnect</Button>}
        </div>
      </div>
    </div>
  )
}

export default ServiceConnect