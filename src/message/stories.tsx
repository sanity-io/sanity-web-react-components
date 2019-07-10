import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { select, text } from '@storybook/addon-knobs'
import centered from '@storybook/addon-centered/react'

import { Message } from './Message'

const stories = storiesOf('Message', module)
stories.addDecorator(centered)

stories.add('Message', () => {
  return (
    <Message
      title={text('Title', 'Title')}
      type={select(
        'Type',
        {
          Default: 'default',
          Error: 'error',
          Warning: 'warning',
          Success: 'success',
        },
        'default',
      )}
    >
      {text('Content', 'Dont shoot the messanger')}
    </Message>
  )
})
