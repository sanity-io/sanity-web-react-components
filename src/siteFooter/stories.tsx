import * as React from 'react'
import { storiesOf } from '@storybook/react'
import SiteFooter from './SiteFooter'

const stories = storiesOf('Layout', module)

stories.add('Site footer', () => {
  return <SiteFooter />
})
