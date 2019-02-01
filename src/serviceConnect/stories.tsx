import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import centered from '@storybook/addon-centered'

import ServiceConnect from './ServiceConnect'
import { Avatar } from '../'

const stories = storiesOf('ServiceConnect', module)

stories.addDecorator(centered)

stories.add('main', () => {
  return (
    <ServiceConnect
      title={text('Title', 'Title')}
      description={text('Description', 'Description')}
      status={
        <div>
          <Avatar />
          {text('Status', 'Status')}
        </div>
      }
    />
  )
})
