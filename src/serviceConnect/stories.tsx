import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'
import centered from '@storybook/addon-centered'

import ServiceConnect from './ServiceConnect'
import { Avatar, GitHubLogo } from '../'

const stories = storiesOf('ServiceConnect', module)

stories.addDecorator(centered)

stories.add('main', () => {
  return (
    <ServiceConnect
      logo={<GitHubLogo />}
      title={text('Title', 'Title')}
      description={text('Description', 'Description')}
      isConnected={boolean('Is connected', false)}
      status={
        <div>
          <Avatar />
          {text('Status', 'Status')}
        </div>
      }
      onConnectClick={action('connect')}
      onDisconnectClick={action('disconnect')}
    />
  )
})
