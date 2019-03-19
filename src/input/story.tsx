import CenteredWrapper from 'dev/app/components/CenteredWrapper'
import * as React from 'react'
import StringInput from './StringInput'
import { Story } from 'dev/app/types'

const story: Story = {
  name: 'input',
  title: 'StringInput',
  patterns: [
    {
      title: 'plain',
      props: [
        {
          type: 'string',
          name: 'name',
          label: 'Name',
        },
      ],
      render(props) {
        return (
          <CenteredWrapper>
            <StringInput name={props.name} />
          </CenteredWrapper>
        )
      },
    },
  ],
}

export default story
