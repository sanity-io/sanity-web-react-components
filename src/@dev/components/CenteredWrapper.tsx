import * as React from 'react'

import * as styles from './CenteredWrapper.module.css'

function CenteredWrapper(props: any) {
  return (
    <div className={styles.root} style={props.style}>
      <div>{props.children}</div>
    </div>
  )
}

export default CenteredWrapper
