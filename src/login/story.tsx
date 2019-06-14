import CenteredWrapper from '@dev/components/CenteredWrapper'
import { Story } from '@dev/types'
import * as React from 'react'
import Login from './Login'

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
