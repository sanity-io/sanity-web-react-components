import CenteredWrapper from '@dev/components/CenteredWrapper'
import { Story } from '@dev/types'
import * as React from 'react'
import StringInput from './StringInput'

const story: Story = {
  name: 'input',
  title: 'StringInput',
  patterns: [
    {
      title: 'plain',
      props: [
        {
          type: 'boolean',
          name: 'invalid',
          label: 'Invalid',
          default: false,
        },
        {
          type: 'string',
          name: 'name',
          label: 'Name',
          default: 'name',
        },
        {
          type: 'string',
          name: 'value',
          label: 'Value',
        },
        {
          type: 'string',
          name: 'placeholder',
          label: 'Placeholder',
          default: 'Placeholder',
        },
      ],
      render(props) {
        return (
          <CenteredWrapper>
            <StringInput
              invalid={props.invalid}
              name={props.name}
              onChange={() => void 0}
              placeholder={props.placeholder}
              value={props.value}
            />
          </CenteredWrapper>
        )
      },
    },
  ],
}

export default story
