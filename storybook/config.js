import { configure, addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { withPropsTable } from 'storybook-addon-react-docgen'
import { withOptions } from '@storybook/addon-options'
import { sanity as sanityTheme } from './themes'

import './layout.css'

addDecorator(
  withOptions({
    name: 'Web Components',
    url: 'https://www.sanity.io',
    theme: sanityTheme,
  }),
)

addDecorator(withKnobs)
addDecorator(withPropsTable)

// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /.stories.tsx$/)

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module)
