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
      props: [],
      render(props) {
        return (
          <CenteredWrapper>
            <div style={{ minWidth: '300px' }}>
              <Login
                onLogin={noop}
                onLogout={noop}
                providers={[
                  {
                    name: 'github',
                    url: '#',
                  },
                  {
                    name: 'google',
                    url: '#',
                  },
                  {
                    name: 'email',
                    url: '#',
                  },
                ]}
                user={null}
              />
            </div>
          </CenteredWrapper>
        )
      },
    },
  ],
}

export default story
