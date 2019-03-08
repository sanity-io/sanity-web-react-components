import * as React from 'react'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered'
import { boolean } from '@storybook/addon-knobs'
import { TemplatePreview } from './'

const stories = storiesOf('template', module)

stories.addDecorator(centered)

const noop = () => void 0

stories.add('TemplatePreview', () => {
  return (
    <TemplatePreview
      isSelected={boolean('Selected', false)}
      onSelect={noop}
      title="Blog"
      subtitle="Made with Gatsby"
      meta={[
        { key: 'CMS', value: 'Sanity Studio' },
        { key: 'Frontend', value: 'GatsbyJS' },
        { key: 'Deployment', value: 'Netlify' },
      ]}
    />
  )
})
