import CenteredWrapper from '@dev/components/CenteredWrapper'
import { Story } from '@dev/types'
import * as React from 'react'
import Button from './Button'

const story: Story = {
  name: 'button',
  title: 'Button',
  patterns: [
    {
      title: 'plain',
      props: [
        {
          type: 'boolean',
          name: 'ghost',
          label: 'Ghost',
          default: false,
        },
        {
          type: 'string',
          name: 'color',
          label: 'Color',
          options: [
            {
              label: 'Default',
              value: '',
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
          default: '',
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
              value: '',
            },
            {
              label: 'Large',
              value: 'large',
            },
          ],
          default: '',
        },
      ],
      render(props) {
        return (
          <CenteredWrapper>
            <Button color={props.color} ghost={props.ghost} size={props.size}>
              {props.label}
            </Button>
          </CenteredWrapper>
        )
      },
    },
  ],
}

export default story
