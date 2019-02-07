import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { select, text } from '@storybook/addon-knobs'
import centered from '@storybook/addon-centered'
import Code from './Code'

const stories = storiesOf('Code', module)

stories.addDecorator(centered)

stories.add('main', () => {
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

  return <Code language={language} code={code} />
})
