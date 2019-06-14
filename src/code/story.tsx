import CenteredWrapper from '@dev/components/CenteredWrapper'
import { Story } from '@dev/types'
import * as React from 'react'
import Code from './Code'

const story: Story = {
  name: 'code',
  title: 'Code',
  patterns: [
    {
      title: 'plain',
      props: [
        {
          type: 'string',
          name: 'language',
          label: 'Language',
          options: [
            { label: 'Plain text', value: 'text' },
            { label: 'Bash', value: 'sh' },
            { label: 'CSS', value: 'css' },
            { label: 'GROQ', value: 'groq' },
            { label: 'HTML', value: 'html' },
            { label: 'Markdown', value: 'markdown' },
            { label: 'JavaScript', value: 'javascript' },
            { label: 'JSON', value: 'json' },
            { label: 'JSX', value: 'jsx' },
            { label: 'PHP', value: 'php' },
          ],
          default: 'text',
        },
        {
          type: 'text',
          name: 'text',
          label: 'Text',
          default: "console.log('hello, world')",
        },
        {
          type: 'boolean',
          name: 'inline',
          label: 'Inline',
          default: false,
        },
      ],
      render(props) {
        return (
          <CenteredWrapper>
            <Code code={props.text} inline={props.inline} language={props.language} />
          </CenteredWrapper>
        )
      },
    },
  ],
}

export default story
