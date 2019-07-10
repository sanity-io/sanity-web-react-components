import * as React from 'react'
import { action } from '@storybook/addon-actions'
// import { boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import Login from './Login'

import { Props } from './Login'

const stories = storiesOf('Login', module)

// const user = {
//   id: 'foo',
//   name: 'Marius Lundgård',
//   email: 'marius@sanity.io',
//   profileImage:
//     'https://lh3.googleusercontent.com/-a67P3TV8b5g/AAAAAAAAAAI/AAAAAAAAADI/LGBX1ZAjh88/photo.jpg',
//   provider: 'google',
// }

stories.add('Login', () => {
  const props: Props = {
    onLogin: action('login'),
    onLogout: action('logout'),
    providers: [
      {
        name: 'google',
        url: 'https://api.sanity.work/v1/auth/login/google',
      },
      {
        name: 'github',
        url: 'https://api.sanity.work/v1/auth/login/github',
      },
      {
        name: 'sanity',
        url: 'https://api.sanity.work/v1/auth/login/sanity',
      },
    ]
  }

  return (
    <div style={{ padding: '1em' }}>
      <Login {...props} />
    </div>
  )
})
