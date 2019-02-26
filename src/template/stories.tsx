import * as React from 'react'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered'
import { boolean } from '@storybook/addon-knobs'
import { TemplatePreview } from './'

const stories = storiesOf('template', module)

stories.addDecorator(centered)

stories.add('TemplatePreview', () => {
  return (
    <TemplatePreview
      isSelected={boolean('Selected', false)}
      title="Blog"
      subtitle="Made with Gatsby"
    />
  )
})
