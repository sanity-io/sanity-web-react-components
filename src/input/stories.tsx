import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, select, text } from '@storybook/addon-knobs'
import centered from '@storybook/addon-centered/react'

import CheckboxInput from './CheckboxInput'
import StringInput from './StringInput'

const stories = storiesOf('input', module)

stories.addDecorator(centered)

const noop = () => void 0

stories.add('String', () => {
  return (
    <StringInput
      invalid={boolean('Invalid', false) as boolean}
      name={text('Name', 'name')}
      value={text('Value', '') as string}
      size={select(
        'Size',
        {
          Small: 'small',
          Normal: 'normal',
          Large: 'large',
        },
        'normal',
      )}
      onChange={noop}
    />
  )
})

stories.add('Checkbox', () => {
  return (
    <CheckboxInput
      name={text('Name', 'name')}
      checked={boolean('Checked', false) as boolean}
      onChange={noop}
    />
  )
})
