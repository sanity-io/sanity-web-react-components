import CenteredWrapper from 'dev/app/components/CenteredWrapper'
import * as React from 'react'
import SiteFooter from './SiteFooter'

import { Story } from 'dev/app/types'

const noop = () => void 0

const story: Story = {
  name: 'siteFooter',
  title: 'SiteFooter',
  patterns: [
    {
      title: 'plain',
      props: [
        {
          type: 'boolean',
          name: 'showEditCookieConsent',
          label: 'Show edit cookie consent',
          default: false,
        },
      ],
      render(props) {
        return (
          <CenteredWrapper>
            <SiteFooter
              onEditCookieConsentClick={noop}
              showEditCookieConsent={props.showEditCookieConsent}
            />
          </CenteredWrapper>
        )
      },
    },
  ],
}

export default story
