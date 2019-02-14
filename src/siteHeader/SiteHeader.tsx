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
  { href: '/why-sanity', label: 'Why Sanity?' },
  { href: '/blog', label: 'Blog' },
  { href: '/docs/', label: 'Docs' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/plugins', label: 'Plugins' },
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
            href: '/',
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
              {renderLink({ children: 'New project', className: 'sanity-button', href: '/create' })}
            </li>
            <li>{renderLink({ children: 'Log in', href: 'https://manage.sanity.io' })}</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default SiteHeader
