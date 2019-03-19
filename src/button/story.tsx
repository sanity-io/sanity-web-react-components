import CenteredWrapper from 'dev/app/components/CenteredWrapper'
import * as React from 'react'
import Button from './Button'

import { Story } from 'dev/app/types'

const story: Story = {
  name: 'button',
  title: 'Button',
  patterns: [
    {
      title: 'plain',
      props: [
        {
          type: 'string',
          name: 'color',
          label: 'Color',
          options: [
            {
              label: 'Default',
              value: undefined,
            },
            {
              label: 'Blue',
              value: 'blue',
            },
            {
              label: 'Red',
              value: 'red',
            },
            {
              label: 'Green',
              value: 'green',
            },
          ],
          default: undefined,
        },
        {
          type: 'string',
          name: 'label',
          label: 'Label',
          default: 'Label',
        },
        {
          type: 'string',
          name: 'size',
          label: 'Size',
          options: [
            {
              label: 'Small',
              value: 'small',
            },
            {
              label: 'Normal',
              value: 'normal',
            },
            {
              label: 'Large',
              value: 'large',
            },
          ],
          default: 'normal',
        },
      ],
      render(props) {
        return (
          <CenteredWrapper>
            <Button color={props.color} size={props.size}>
              {props.label}
            </Button>
          </CenteredWrapper>
        )
      },
    },
  ],
}

export default story
