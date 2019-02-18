import { configure, addDecorator, addParameters } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { withPropsTable } from 'storybook-addon-react-docgen'
import { withOptions } from '@storybook/addon-options'
import { sanity as sanityTheme } from './themes'
import { withCssResources } from '@storybook/addon-cssresources'

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
addDecorator(withCssResources)
addParameters({
  cssresources: [{
      id: `sanity`,
      title: 'Sanity.io website',
      code: `<link rel="stylesheet" type="text/css" href="https://www.sanity.io/_next/static/style.css"></link>`,
      picked: false,
    },
  ],
});

// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /.stories.tsx$/)

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module)
