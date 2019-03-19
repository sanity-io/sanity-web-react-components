import CenteredWrapper from 'dev/app/components/CenteredWrapper'
import * as React from 'react'
import Code from './Code'

import { Story } from 'dev/app/types'

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
