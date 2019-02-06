import * as React from 'react'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered'
import { select } from '@storybook/addon-knobs'
import { Icon } from './'

const stories = storiesOf('components/Icons', module)

stories.addDecorator(centered)

stories.add('Hamburger', () => {
  return <Icon symbol={select('symbol', ['hamburger', 'chevron-down'], 'hamburger') as any} />
})
