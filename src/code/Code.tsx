import * as React from 'react'
import Lowlight from './Lowlight'

import * as styles from './Code.module.css'

interface Props {
  code: string
  inline?: boolean
  language?:
    | 'css'
    | 'groq'
    | 'html'
    | 'markdown'
    | 'javascript'
    | 'json'
    | 'jsx'
    | 'php'
    | 'text'
    | 'sh'
}

function Code(props: Props) {
  const className = `sanity-code ${styles.root}`

  if (props.inline) {
    return <Lowlight className={className} inline language={props.language} code={props.code} />
  }

  return (
    <pre className={className}>
      <Lowlight className="" inline language={props.language} code={props.code} />
    </pre>
  )
}

export default Code
