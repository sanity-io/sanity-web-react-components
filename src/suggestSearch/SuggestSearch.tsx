import * as React from 'react'

import * as styles from './SuggestSearch.module.css'

interface Props {
  name: string
  hasResults?: boolean
  id?: string
  query?: string
  onFocus?: () => void
  onQueryChange: (query: string) => void
  open?: boolean
  placeholder: string
  results?: any
  setInputElement?: (elm: HTMLInputElement) => void
}

function SuggestSearch(props: Props) {
  const { name, query, onQueryChange, placeholder, results, open } = props
  const className = open ? (props.hasResults ? styles.openWithResults : styles.open) : styles.closed

  function handleChange(evt: any) {
    onQueryChange(evt.target.value)
  }

  function handleFocus() {
    if (props.onFocus) props.onFocus()
  }

  return (
    <div className={className}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <input
            autoComplete="off"
            autoCorrect="off"
            className={styles.input}
            name={name}
            id={props.id}
            onChange={handleChange}
            onFocus={handleFocus}
            placeholder={placeholder}
            ref={props.setInputElement}
            type="text"
            value={query}
          />
          {open && <div className={styles.results}>{results}</div>}
        </div>
      </div>
    </div>
  )
}

export default SuggestSearch
