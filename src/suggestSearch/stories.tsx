import * as React from 'react'
import SuggestSearch from './SuggestSearch'

import * as styles from './stories.module.css'

import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import centered from '@storybook/addon-centered'

const stories = storiesOf('Suggest search', module)
stories.addDecorator(centered)

const mockResults = [{ key: 'a' }, { key: 'b' }, { key: 'c' }, { key: 'd' }, { key: 'e' }]

const results = mockResults.map(result => (
  <div key={result.key} className={styles.resultItem}>
    <a href="" className={styles.resultItem}>
      result
    </a>
  </div>
))

stories.add('Suggest search', () => {
  return (
    <SuggestSearch
      hasResults={boolean('hasResult', false)}
      name={text('name', 'myName')}
      query={text('query', 'myQuery')}
      onQueryChange={action('onQueryChange')}
      onFocus={action('onFocus')}
      placeholder={text('placeholder', 'myPlaceholder')}
      open={boolean('open', false)}
      results={results}
    />
  )
})
