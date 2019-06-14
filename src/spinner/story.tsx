import CenteredWrapper from '@dev/components/CenteredWrapper'
import { Story } from '@dev/types'
import * as React from 'react'
import Spinner from './Spinner'

const story: Story = {
  name: 'spinner',
  title: 'Spinner',
  patterns: [
    {
      title: 'plain',
      props: [],
      render() {
        return (
          <CenteredWrapper>
            <Spinner />
          </CenteredWrapper>
        )
      },
    },
  ],
}

export default story
