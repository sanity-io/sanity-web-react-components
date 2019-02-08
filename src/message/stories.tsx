import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { select, text } from '@storybook/addon-knobs'
import centered from '@storybook/addon-centered'

import { Message } from './Message'

const stories = storiesOf('Message', module)
stories.addDecorator(centered)

stories.add('Message', () => {
  return (
    <Message
      title={text('title', 'Title')}
      kind={select('kind', ['default', 'error', 'warning', 'success'], 'default')}
    >
      {text('children', 'Dont shoot the messanger')}
    </Message>
  )
})
