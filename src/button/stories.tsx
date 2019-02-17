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
      color={select('Color', { None: '', Red: 'red', Green: 'green', Blue: 'blue' }, '') as any}
      disabled={boolean('Is disabled', false)}
      ghost={boolean('Is ghost', false)}
      onClick={action('click')}
      size={select('Size', ['small', 'normal', 'large'], 'normal') as any}
      type={select('Type', ['button', 'reset', 'submit'], 'button') as any}
    >
      {text('Label', 'Label')}
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
