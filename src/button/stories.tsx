import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, select } from '@storybook/addon-knobs'
import centered from '@storybook/addon-centered'
import { action } from '@storybook/addon-actions'
import Button from './Button'

const stories = storiesOf('Button', module)

stories.addDecorator(centered)

stories.add('Button', () => {
  return (
    <Button
      disabled={boolean('disabled', false)}
      onClick={action('click')}
      size={select('Size', ['small', 'normal', 'large'], 'normal') as any}
      type={select('type', ['button', 'reset', 'submit'], 'button') as any}
    >
      {text('children', 'My button')}
    </Button>
  )
})

stories.add('Link', () => {
  return (
    <Button type="link" href="/" disabled={boolean('disabled', false)} onClick={action('click')}>
      {text('children', 'My button')}
    </Button>
  )
})
