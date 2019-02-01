import * as React from 'react'
import SiteHeader from './SiteHeader'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

const stories = storiesOf('Layout', module)

stories.add('Site header', () => {
  return (
    <SiteHeader
      siteTitle="Test"
      showNav
      onHideNav={action('onHideNav')}
      onShowNav={action('onShowNav')}
    />
  )
})
