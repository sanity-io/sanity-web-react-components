import { configure, addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
// // import { withPropsTable } from 'storybook-addon-react-docgen'
import { withOptions } from '@storybook/addon-options'
// import { sanity as sanityTheme } from './themes'

import './layout.css'

addDecorator(
  withOptions({
    name: 'sanity-web-react-components',
    url: 'https://www.sanity.io',
    // theme: sanityTheme,
  }),
)

addDecorator(withKnobs)
// addDecorator(withPropsTable)

// automatically import src/**/*/stories.tsx
const req = require.context('..', true, /\/stories.tsx$/)

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module)
