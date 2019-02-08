import * as React from 'react'
import { Button, StringInput } from '../'

import * as styles from './Login.module.css'

interface LoginProvider {
  name: string
  title: string
  url: string
}

export interface Props {
  onLogin: (provider: LoginProvider) => void
  onLogout: () => void
  providers: LoginProvider[]
  title?: string
  user: any
}

function Login(props: Props) {
  const externalProviders = props.providers.filter(p => p.name !== 'sanity')

  function handleExternalLogin(evt: MouseEvent, provider: LoginProvider) {
    evt.preventDefault()
    props.onLogin(provider)
  }

  if (props.user) {
    return (
      <div className={styles.root} style={{ textAlign: 'center' }}>
        <h1>Hi, {props.user.name}!</h1>
        <p>
          You are logged in with {props.user.provider} as <strong>{props.user.email}</strong>.
        </p>
        <Button onClick={props.onLogout}>Log out</Button>
      </div>
    )
  }

  return (
    <div className={styles.root}>
      <h3>{props.title || 'Log in to Sanity'}</h3>

      <div>
        <h4>Sign in using</h4>
        {externalProviders.map(provider => (
          <div key={provider.name}>
            <Button
              type="link"
              href={provider.url}
              onClick={evt => handleExternalLogin(evt, provider)}
            >
              Sign in with {provider.title}
            </Button>
          </div>
        ))}
      </div>

      <form>
        <h4>or</h4>

        <div>
          <label>
            <div>Email</div>
            <StringInput name="email" />
          </label>
        </div>
        <div>
          <label>
            <div>Password</div>
            <StringInput name="password" type="password" />
          </label>
        </div>

        <div>
          <a href="#">Forgot password?</a>
        </div>

        <Button type="submit">Login with email</Button>
      </form>
    </div>
  )
}

export default Login
