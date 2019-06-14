import CenteredWrapper from '@dev/components/CenteredWrapper'
import { Story } from '@dev/types'
import * as React from 'react'
import { Icon } from './'

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
