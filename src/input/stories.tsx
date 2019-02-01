import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select } from '@storybook/addon-knobs'
import centered from '@storybook/addon-centered'

import StringInput from './StringInput'

const stories = storiesOf('Input', module)

stories.addDecorator(centered)

const noop = () => void 0

stories.add('String', () => {
  return (
    <StringInput
      name={text('name', 'myStringInput')}
      value={text('value', '') as string}
      size={select('size', ['normal', 'large', 'small'], 'normal')}
      onChange={noop}
    />
  )
})
