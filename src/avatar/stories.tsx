import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'
import centered from '@storybook/addon-centered'
import Avatar from './Avatar'

const stories = storiesOf('Avatar', module)

stories.addDecorator(centered)

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

stories.add('main', () => {
  const imageIndex: number = select(
    'Image',
    { None: -1, 'Ted Nelson': 0, 'Doug Engelbart': 1, 'Kermit the Frog': 2 },
    -1,
  )

  const size: any = select('Size', { Small: 'small', Normal: 'normal', Large: 'large' }, 'normal')

  return <Avatar image={images[imageIndex]} size={size} />
})
