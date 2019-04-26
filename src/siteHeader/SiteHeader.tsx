import * as React from 'react'
import { Icon } from '../icon'
import { SanityLogo } from '../logo'

import * as styles from './SiteHeader.module.css'

interface LinkProps {
  children: any
  className?: string
  href: string
}

interface Props {
  currentPath?: string
  onHideNav: () => void
  onShowNav: () => void
  renderLink?: (props: LinkProps) => any
  showNav: boolean
  siteTitle?: string
}

const menuLinks = [
  { href: 'https://www.sanity.io/why-sanity', label: 'Why Sanity?' },
  { href: 'https://www.sanity.io/docs', label: 'Docs' },
  { href: 'https://www.sanity.io/pricing', label: 'Pricing' },
  { href: 'https://www.sanity.io/contact', label: 'Contact us' },
]

function defaultRenderLink(props: LinkProps) {
  return <a {...props} />
}

function SiteHeader(props: Props) {
  const { onHideNav, onShowNav, showNav, siteTitle } = props
  const renderLink = props.renderLink || defaultRenderLink
  return (
    <header className={styles.root} role="banner">
      <div className={styles.wrapper}>
        <div className={styles.branding}>
          {renderLink({
            children: (
              <span>
                <SanityLogo />
                <span className="sanity-sr">{siteTitle || 'Sanity'}</span>
              </span>
            ),
            href: 'https://www.sanity.io/',
          })}
        </div>

        <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
          <Icon symbol="hamburger" />
        </button>

        <nav
          className={showNav ? styles.visibleNav : styles.hiddenNav}
          aria-label="Primary navigation"
        >
          <ul className={styles.contentMenu}>
            {menuLinks.map(link => (
              <li key={link.href}>
                {renderLink({
                  children: link.label,
                  className: link.href === props.currentPath ? styles.activeLink : null,
                  href: link.href,
                })}
              </li>
            ))}
          </ul>
          <ul className={styles.userMenu}>
            <li>
              {renderLink({
                children: 'New project',
                className: 'sanity-button sanity-button--ghost',
                href: 'https://www.sanity.io/create',
              })}
            </li>
            <li>{renderLink({ children: 'Log in', href: 'https://manage.sanity.io' })}</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default SiteHeader
