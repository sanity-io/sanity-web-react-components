import * as React from 'react'
import * as Lowlight from 'react-lowlight'
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

Lowlight.registerLanguage('css', cssLang)
Lowlight.registerLanguage('groq', groqLang)
Lowlight.registerLanguage('html', xmlLang)
Lowlight.registerLanguage('markdown', markdownLang)
Lowlight.registerLanguage('javascript', jsLang)
Lowlight.registerLanguage('json', jsonLang)
Lowlight.registerLanguage('jsx', jsLang)
Lowlight.registerLanguage('php', phpLang)
Lowlight.registerLanguage('sh', bashLang)

import * as styles from './Code.module.css'

interface Props {
  code: string
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

function Code(props: Props) {
  const className = `sanity-code ${styles.root}`
  const code = decodeHTMLEntities(props.code || '')

  if (supportedLangs.indexOf(props.language as any) === -1) {
    if (props.language !== 'text') {
      console.warn(`Code language not supported: ${props.language}`)
    }
    return <pre className={className}>{code}</pre>
  }

  return (
    <pre className={className}>{<Lowlight inline language={props.language} value={code} />}</pre>
  )
}

export default Code
