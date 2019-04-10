import CenteredWrapper from 'dev/app/components/CenteredWrapper'
import * as React from 'react'
import Login from './Login'

import { Story } from 'dev/app/types'

const noop = () => void 0

const story: Story = {
  name: 'login',
  title: 'Login',
  patterns: [
    {
      title: 'plain',
      props: [
        {
          type: 'boolean',
          name: 'showGoogle',
          label: 'Show Google',
          default: true,
        },
      ],
      render(props: any) {
        return (
          <CenteredWrapper>
            <div style={{ minWidth: '300px' }}>
              <Login
                onLogin={noop}
                onLogout={noop}
                providers={
                  [
                    {
                      name: 'github',
                      url: '#',
                    },
                    props.showGoogle && {
                      name: 'google',
                      url: '#',
                    },
                    {
                      name: 'sanity',
                      url: '#',
                    },
                  ].filter(Boolean) as any
                }
              />
            </div>
          </CenteredWrapper>
        )
      },
    },
  ],
}

export default story
