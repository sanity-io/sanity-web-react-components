import * as React from 'react'

import * as styles from './SiteFooter.module.css'

export type Props = {
  systemStatus?: 'partially-down' | 'down' | 'up'
}

function SiteFooter(props: Props) {
  const systemStatus = props.systemStatus || 'up'
  return (
    <footer className={styles.root}>
      <div className={styles.grid}>
        <div className={styles.cell}>
          <h2>
            <a href="/why-sanity">Choose Sanity</a>
          </h2>
          <ul>
            <li>
              <a href="/why-sanity">Why Sanity?</a>
            </li>
            <li>
              <a href="/why-sanity#use-cases">Use cases</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/security">Security and compliance</a>
            </li>
            <li>
              <a href="/legal/tos">Terms of service</a>
            </li>
            <li>
              <a href="/legal/privacy">Privacy policy</a>
            </li>
          </ul>
        </div>
        <div className={styles.cell}>
          <h2>
            <a href="/content-studio">Content Studio</a>
          </h2>
          <ul>
            <li>
              <a href="/content-studio#built-for-developers">Built for developers</a>
            </li>
            <li>
              <a href="/content-studio#block-editor">Portable text editor</a>
            </li>
            <li>
              <a href="/content-studio#real-time">Real-time</a>
            </li>
            <li>
              <a href="/content-studio#customizable">Customizable</a>
            </li>
            <li>
              <a href="/content-studio#content-manager">Content manager</a>
            </li>
            <li>
              <a href="/content-studio#image-pipeline">Picture perfect</a>
            </li>
          </ul>
        </div>
        <div className={styles.cell}>
          <h2>
            <a href="/hosted-backend">Hosted backend</a>
          </h2>
          <ul>
            <li>
              <a href="/hosted-backend#groq">GROQ</a>
            </li>
            <li>
              <a href="/hosted-backend#real-time">Real-time</a>
            </li>
            <li>
              <a href="/hosted-backend#enterprise-comforts">Enterprise</a>
            </li>
            <li>
              <a href="/hosted-backend#cli">CLI</a>
            </li>
            <li>
              <a href="/hosted-backend#image-pipeline">Asset pipeline</a>
            </li>
          </ul>
        </div>
        <div className={styles.cell}>
          <h2>
            <a href="/docs/">Documentation</a>
          </h2>
          <ul>
            <li>
              <a href="/docs/">Introduction</a>
            </li>
            <li>
              <a href="/docs/content-studio">Content Studio</a>
            </li>
            <li>
              <a href="/docs/data-store">Data store</a>
            </li>
            <li>
              <a href="/docs/front-ends">Front ends</a>
            </li>
            <li>
              <a href="/docs/asset-pipeline">Asset pipeline</a>
            </li>
            <li>
              <a href="/docs/reference">Reference</a>
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
          <span>&#x2B24;</span> Unknown system status
        </div>
      )}
      {systemStatus === 'up' && (
        <div className={styles.systemUp}>
          <span>&#x2B24;</span> All systems operational
        </div>
      )}
      {systemStatus === 'partially-down' && (
        <div className={styles.systemPartiallyDown}>
          <span>&#x2B24;</span> Systems partially operational
        </div>
      )}
      {systemStatus === 'down' && (
        <div className={styles.systemDown}>
          <span>&#x2B24;</span> All systems down
        </div>
      )}
      <div className={styles.bottomLine}>
        <ul>
          <li>
            <a href="">Edit cookie consent</a>
          </li>
          <li>
            <a href="">Security and compliance</a>
          </li>
          <li>
            <a href="">Terms of service</a>
          </li>
          <li>
            <a href="">Privacy policy</a>
          </li>
          <li>
            <span>Sanity Inc. &middot; hello@sanity.io &middot; +47 400 80 600</span>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default SiteFooter
