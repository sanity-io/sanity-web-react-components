import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs'
import SiteFooter from './SiteFooter'

const stories = storiesOf('Layout', module)

const noop = () => void 0

stories.add('Site footer', () => {
  return (
    <SiteFooter
      onEditCookieConsentClick={noop}
      showEditCookieConsent={boolean('Show cookie consent edit button', true)}
    />
  )
})
