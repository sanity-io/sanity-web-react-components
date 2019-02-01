import * as React from 'react'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered'
import SanityLogo from './SanityLogo'

const stories = storiesOf('Logo', module)

stories.addDecorator(centered)

stories.add('Sanity', () => {
  return <SanityLogo />
})
