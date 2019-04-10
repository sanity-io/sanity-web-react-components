import * as React from 'react'
import ChevronDownIcon from './ChevronDownIcon'
import HamburgerIcon from './HamburgerIcon'

type Props = {
  symbol: 'chevron-down' | 'hamburger'
}

export function Icon(props: Props) {
  switch (props.symbol) {
    case 'chevron-down':
      return <ChevronDownIcon />
    case 'hamburger':
      return <HamburgerIcon />
    default:
      return <span>Unknown symbol: {props.symbol}</span>
  }
}
