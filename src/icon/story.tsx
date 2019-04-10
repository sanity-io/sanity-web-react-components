import CenteredWrapper from 'dev/app/components/CenteredWrapper'
import * as React from 'react'
import { Icon } from './'
import { Story } from 'dev/app/types'

const story: Story = {
  name: 'icon',
  title: 'Icon',
  patterns: [
    {
      title: 'All icons',
      render() {
        return (
          <CenteredWrapper style={{ fontSize: '2em' }}>
            <Icon symbol="chevron-down" />
            <Icon symbol="hamburger" />
          </CenteredWrapper>
        )
      },
    },
  ],
}

export default story
