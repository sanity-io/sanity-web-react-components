import CenteredWrapper from 'dev/app/components/CenteredWrapper'
import * as React from 'react'
import Spinner from './Spinner'

import { Story } from 'dev/app/types'

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
