import { configure, addDecorator, addParameters } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
// import { withPropsTable } from 'storybook-addon-react-docgen'
import { withOptions } from '@storybook/addon-options'
import sanityTheme from './sanityTheme'
import './layout.module.css'

addParameters({
  options: {
    theme: sanityTheme
  }
})

// automatically import src/**/*/stories.tsx
const req = require.context('../src', true, /\/stories.tsx$/)

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module)
