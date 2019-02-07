import * as React from 'react'
import * as ReactLowlight from 'react-lowlight'
import { decodeHTMLEntities } from '../lib/stringUtils'

// Import languages
import * as cssLang from 'highlight.js/lib/languages/css'
import * as bashLang from 'highlight.js/lib/languages/bash'
import * as xmlLang from 'highlight.js/lib/languages/xml'
import * as markdownLang from 'highlight.js/lib/languages/markdown'
import * as jsLang from 'highlight.js/lib/languages/javascript'
import * as jsonLang from 'highlight.js/lib/languages/json'
import * as phpLang from 'highlight.js/lib/languages/php'
import groqLang from './languages/groq'

ReactLowlight.registerLanguage('css', cssLang)
ReactLowlight.registerLanguage('groq', groqLang)
ReactLowlight.registerLanguage('html', xmlLang)
ReactLowlight.registerLanguage('markdown', markdownLang)
ReactLowlight.registerLanguage('javascript', jsLang)
ReactLowlight.registerLanguage('json', jsonLang)
ReactLowlight.registerLanguage('jsx', jsLang)
ReactLowlight.registerLanguage('php', phpLang)
ReactLowlight.registerLanguage('sh', bashLang)

interface Props {
  className?: string
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

const supportedLangs = ['css', 'groq', 'html', 'markdown', 'javascript', 'json', 'jsx', 'php', 'sh']

function Lowlight(props: Props) {
  const code = decodeHTMLEntities(props.code || '')

  if (supportedLangs.indexOf(props.language as any) === -1) {
    if (props.language !== 'text') {
      console.warn(`Code language not supported: ${props.language}`)
    }
    if (props.inline) {
      return <code className={props.className}>{code}</code>
    }
    return (
      <pre className={props.className}>
        <code>{code}</code>
      </pre>
    )
  }

  return (
    <ReactLowlight
      className={props.className}
      value={code}
      inline={props.inline}
      language={props.language}
    />
  )
}

export default Lowlight
