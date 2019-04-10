import * as React from 'react'
import { Button } from '../'
import GitHubLogo from './GitHubLogo'
import GoogleLogo from './GoogleLogo'

import * as styles from './Login.module.css'

interface LoginProvider {
  name: 'google' | 'github' | 'sanity'
  url: string
}

type LoginHandler = (provider: LoginProvider) => void

export interface Props {
  onLogin: LoginHandler
  onLogout: () => void
  providers: LoginProvider[]
  title?: string
}

function LoginProviderButton({
  onLogin,
  provider,
}: {
  onLogin: LoginHandler
  provider: LoginProvider
}) {
  const handleLogin = (evt: MouseEvent) => {
    evt.preventDefault()
    onLogin(provider)
  }

  switch (provider.name) {
    case 'sanity':
      return (
        <div className={styles.signInButtonWrapper}>
          <Button ghost type="link" href={provider.url} onClick={handleLogin}>
            Sign in with email &amp; password
          </Button>
        </div>
      )
    case 'github':
      return (
        <div className={styles.signInButtonWrapper}>
          <Button ghost type="link" href={provider.url} onClick={handleLogin}>
            <GitHubLogo />
            <span>Sign in with GitHub</span>
          </Button>
        </div>
      )
    case 'google':
      return (
        <div className={styles.signInButtonWrapper}>
          <Button ghost type="link" href={provider.url} onClick={handleLogin}>
            <GoogleLogo />
            <span>Sign in with Google</span>
          </Button>
        </div>
      )
    default:
      return <div>Unknown auth provider: {provider.name}</div>
  }
}

function Login(props: Props) {
  const { providers } = props
  const showCreateAccountLink = false

  return (
    <div className={styles.root}>
      <div className={styles.loginButtons}>
        {providers.map(provider => (
          <LoginProviderButton key={provider.name} onLogin={props.onLogin} provider={provider} />
        ))}
      </div>
      {showCreateAccountLink && (
        <p>
          Or <a href="#">create an account</a>
        </p>
      )}
    </div>
  )
}

export default Login
