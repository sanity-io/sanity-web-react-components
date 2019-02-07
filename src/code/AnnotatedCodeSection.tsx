import * as React from 'react'
import Lowlight from '../code/Lowlight'

import * as styles from './AnnotatedCodeSection.module.css'

interface Props {
  blocks: any[]
}

function AnnotatedCodeSection(props: Props) {
  return (
    <div className={styles.root}>
      {props.blocks.map(block => {
        return (
          <div key={block.key} className={styles.block}>
            <div className={styles.annotation}>
              <button>i</button>
            </div>
            <pre className={styles.code}>
              <Lowlight className="" inline language="groq" code={block.code} />
            </pre>
          </div>
        )
      })}
    </div>
  )
}

export default AnnotatedCodeSection
