import * as React from 'react'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/react'
import Spinner from './Spinner'

const stories = storiesOf('spinner', module)

stories.addDecorator(centered)

stories.add('Spinner', () => {
  return <Spinner />
})
