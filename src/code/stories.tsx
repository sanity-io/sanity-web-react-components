import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, select, text } from '@storybook/addon-knobs'
import { AnnotatedCodeSection, Code } from './'

const stories = storiesOf('code', module)

stories.add('Code', () => {
  const language: any = select(
    'Language',
    {
      'Plain text': 'text',
      Bash: 'sh',
      CSS: 'css',
      GROQ: 'groq',
      HTML: 'html',
      Markdown: 'markdown',
      JavaScript: 'javascript',
      JSON: 'json',
      JSX: 'jsx',
      PHP: 'php',
    },
    'text',
  )

  const code = text('Code', 'console.log("Hello, world!")')

  return (
    <div style={{ padding: '4em' }}>
      <Code language={language} code={code} inline={boolean('Inline', false)} />
    </div>
  )
})

stories.add('AnnotatedCode', () => {
  return (
    <div style={{ padding: '4em' }}>
      <AnnotatedCodeSection
        blocks={[
          { key: 'a', code: '* // Everything, i.e. all documents\na\na' },
          { key: 'a', code: '*[] // Everything with no constraints applied, i.e. all documents' },
          { key: 'a', code: '*[_type == "movie"] // All movie documents' },
          { key: 'a', code: '*[_id == "abc.123"] // _id equals' },
        ]}
      />
    </div>
  )
})
