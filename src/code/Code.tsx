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
  mode?: 'light' | 'dark'
}

function Code(props: Props) {
  let className = `sanity-code ${styles.root}`

  if (props.mode === 'light') className += ` sanity-code--light`
  if (props.mode === 'dark') className += ` sanity-code--dark`

  if (props.inline) {
    return <Lowlight className={className} inline language={props.language} code={props.code} />
  }

  return (
    <pre className={className}>
      <Lowlight className="" inline language={props.language || 'text'} code={props.code} />
    </pre>
  )
}

export default Code
