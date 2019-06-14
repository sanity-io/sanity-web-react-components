import CenteredWrapper from '@dev/components/CenteredWrapper'
import { Story } from '@dev/types'
import * as React from 'react'
import Avatar from './Avatar'

const images = [
  {
    src: 'https://hcipioneers.files.wordpress.com/2015/07/dsc_0454.jpg?w=336&h=447&zoom=2',
    alt: 'Portrait of Ted Nelson',
  },
  {
    src:
      'https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2013/07/04/100864975-89869210.530x298.jpg?v=1372946457',
    alt: 'Portrait of Doug Engelbart',
  },
  {
    src:
      'https://lumiere-a.akamaihd.net/v1/images/character_themuppets_kermit_09279e8e.jpeg?region=0%2C0%2C300%2C300&optimize=true',
    alt: 'Portrait of Kermit the Frog',
  },
]

const story: Story = {
  name: 'avatar',
  title: 'Avatar',
  patterns: [
    {
      title: 'plain',
      props: [
        {
          type: 'string',
          name: 'image',
          label: 'Image',
          options: [
            {
              label: 'None',
              value: '-1',
            },
            {
              label: 'Ted Nelson',
              value: '0',
            },
            {
              label: 'Doug Engelbart',
              value: '1',
            },
            {
              label: 'Kermit',
              value: '2',
            },
          ],
          default: '',
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
            <Avatar image={images[Number(props.image)]} size={props.size || undefined} />
          </CenteredWrapper>
        )
      },
    },
  ],
}

export default story
