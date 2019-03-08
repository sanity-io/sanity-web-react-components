import * as React from 'react'

import * as styles from './SiteFooter.module.css'

export type Props = {
  onEditCookieConsentClick?: () => void
  showEditCookieConsent?: boolean
  systemStatus?: 'partially-down' | 'down' | 'up'
}

function SiteFooter(props: Props) {
  const { onEditCookieConsentClick, showEditCookieConsent } = props
  const systemStatus = props.systemStatus || 'up'
  return (
    <footer className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.grid}>
          <div className={styles.cell}>
            <h2>
              <a href="https://www.sanity.io/why-sanity">Choose Sanity</a>
            </h2>
            <ul>
              <li>
                <a href="https://www.sanity.io/why-sanity">Why Sanity?</a>
              </li>
              <li>
                <a href="https://www.sanity.io/why-sanity#use-cases">Use cases</a>
              </li>
              <li>
                <a href="https://www.sanity.io/contact">Contact</a>
              </li>
              <li>
                <a href="https://www.sanity.io/security">Security and compliance</a>
              </li>
              <li>
                <a href="https://www.sanity.io/legal/tos">Terms of service</a>
              </li>
              <li>
                <a href="https://www.sanity.io/legal/privacy">Privacy policy</a>
              </li>
            </ul>
          </div>
          <div className={styles.cell}>
            <h2>
              <a href="https://www.sanity.io/content-studio">Content Studio</a>
            </h2>
            <ul>
              <li>
                <a href="https://www.sanity.io/content-studio#built-for-developers">
                  Built for developers
                </a>
              </li>
              <li>
                <a href="https://www.sanity.io/content-studio#block-editor">Portable text editor</a>
              </li>
              <li>
                <a href="https://www.sanity.io/content-studio#real-time">Real-time</a>
              </li>
              <li>
                <a href="https://www.sanity.io/content-studio#customizable">Customizable</a>
              </li>
              <li>
                <a href="https://www.sanity.io/content-studio#content-manager">Content manager</a>
              </li>
              <li>
                <a href="https://www.sanity.io/content-studio#image-pipeline">Picture perfect</a>
              </li>
            </ul>
          </div>
          <div className={styles.cell}>
            <h2>
              <a href="https://www.sanity.io/hosted-backend">Hosted backend</a>
            </h2>
            <ul>
              <li>
                <a href="https://www.sanity.io/hosted-backend#groq">GROQ</a>
              </li>
              <li>
                <a href="https://www.sanity.io/hosted-backend#real-time">Real-time</a>
              </li>
              <li>
                <a href="https://www.sanity.io/hosted-backend#enterprise-comforts">Enterprise</a>
              </li>
              <li>
                <a href="https://www.sanity.io/hosted-backend#cli">CLI</a>
              </li>
              <li>
                <a href="https://www.sanity.io/hosted-backend#image-pipeline">Asset pipeline</a>
              </li>
            </ul>
          </div>
          <div className={styles.cell}>
            <h2>
              <a href="https://www.sanity.io/docs/">Documentation</a>
            </h2>
            <ul>
              <li>
                <a href="https://www.sanity.io/docs/">Introduction</a>
              </li>
              <li>
                <a href="https://www.sanity.io/docs/content-studio">Content Studio</a>
              </li>
              <li>
                <a href="https://www.sanity.io/docs/data-store">Data store</a>
              </li>
              <li>
                <a href="https://www.sanity.io/docs/front-ends">Front ends</a>
              </li>
              <li>
                <a href="https://www.sanity.io/docs/asset-pipeline">Asset pipeline</a>
              </li>
              <li>
                <a href="https://www.sanity.io/docs/reference">Reference</a>
              </li>
            </ul>
          </div>
          <div className={styles.cell}>
            <h2>Find us</h2>
            <ul>
              <li>
                <a href="https://github.com/sanity-io/sanity">GitHub</a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCGz69JwGRptteFAaX8hSKCQ">YouTube</a>
              </li>
              <li>
                <a href="https://twitter.com/sanity_io">Twitter</a>
              </li>
              <li>
                <a href="https://slack.sanity.io/">Join our Slack</a>
              </li>
              <li>
                <a href="https://stackoverflow.com/questions/tagged/sanity">StackOverflow</a>
              </li>
              <li>
                <a href="https://www.sanity.io/blog">Blog</a>
              </li>
            </ul>
          </div>
        </div>
        {!systemStatus && (
          <div className={styles.systemStatus}>
            <a href="https://status.sanity.io/">
              <span>&#x2B24;</span> Unknown system status
            </a>
          </div>
        )}
        {systemStatus === 'up' && (
          <div className={styles.systemUp}>
            <a href="https://status.sanity.io/">
              <span>&#x2B24;</span> All systems operational
            </a>
          </div>
        )}
        {systemStatus === 'partially-down' && (
          <div className={styles.systemPartiallyDown}>
            <a href="https://status.sanity.io/">
              <span>&#x2B24;</span> Partially degraded service
            </a>
          </div>
        )}
        {systemStatus === 'down' && (
          <div className={styles.systemDown}>
            <a href="https://status.sanity.io/">
              <span>&#x2B24;</span> All systems down
            </a>
          </div>
        )}
        <div className={styles.bottomLine}>
          <ul>
            {onEditCookieConsentClick && showEditCookieConsent && (
              <li>
                <button
                  onClick={evt => {
                    evt.preventDefault()
                    onEditCookieConsentClick()
                  }}
                  type="button"
                >
                  Edit cookie consent
                </button>
              </li>
            )}
            <li>
              <a href="https://www.sanity.io/security">Security and compliance</a>
            </li>
            <li>
              <a href="https://www.sanity.io/legal/tos">Terms of service</a>
            </li>
            <li>
              <a href="https://www.sanity.io/legal/privacy">Privacy policy</a>
            </li>
            <li>
              <span>
                Sanity Inc. &middot; <a href="mailto:hello@sanity.io">hello@sanity.io</a> &middot;
                +47 400 80 600
              </span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
