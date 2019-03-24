import * as React from 'react'
import { Button } from '../'
import GitHubLogo from './GitHubLogo'
import GoogleLogo from './GoogleLogo'

import * as styles from './Login.module.css'

interface LoginProvider {
  name: string
  url: string
}

type LoginHandler = (name: string, url: string) => void

export interface Props {
  onLogin: LoginHandler
  onLogout: () => void
  providers: LoginProvider[]
  title?: string
  user: any
}

function LoginProviderButton({
  name,
  onLogin,
  url,
}: {
  name: string
  onLogin: LoginHandler
  url: string
}) {
  switch (name) {
    case 'email':
      return (
        <div className={styles.signInButtonWrapper}>
          <Button ghost type="link" href={url} onClick={() => onLogin(name, url)}>
            Sign in email &amp; password
          </Button>
        </div>
      )
    case 'github':
      return (
        <div className={styles.signInButtonWrapper}>
          <Button ghost type="link" href={url} onClick={() => onLogin(name, url)}>
            <GitHubLogo />
            <span>Sign in with GitHub</span>
          </Button>
        </div>
      )
    case 'google':
      return (
        <div className={styles.signInButtonWrapper}>
          <Button ghost type="link" href={url} onClick={() => onLogin(name, url)}>
            <GoogleLogo />
            <span>Sign in with Google</span>
          </Button>
        </div>
      )
    default:
      return <div>Unknown auth provider: {name}</div>
  }
}

function Login(props: Props) {
  const { providers } = props

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
      <h3 className={styles.title}>{props.title || 'Log in to Sanity'}</h3>
      <div className={styles.loginButtons}>
        {providers.map(provider => (
          <LoginProviderButton
            key={provider.name}
            name={provider.name}
            onLogin={props.onLogin}
            url={provider.url}
          />
        ))}
      </div>
      <p>
        Or <a href="#">create an account</a>
      </p>
    </div>
  )
}

export default Login
