import * as React from 'react'
import { number, text, select, boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered'
import WizardStep, { Props as StepProps } from './WizardStep'
import WizardSteps from './WizardSteps'

const stories = storiesOf('Wizard', module)

const step: StepProps = {
  title: 'Step',
  description: 'A small step for man'
}

stories.add('Steps', () => {
  const steps = [...Array(number('steps', 3))].map(() => ({ ...step }))
  const showDescription = boolean('show description', false)
  const status = select('status', ['active', 'completed', 'none'], 'none')
  return (
    <WizardSteps>
      {steps.map((step, i) => (
        <WizardStep
          {...step}
          description={showDescription ? step.description : undefined}
          label={`${i + 1}`}
          status={status}
        />
      ))}
    </WizardSteps>
  )
})

stories.add('Steps example', () => {
  const showDescription = boolean('show description', false)
  return (
    <WizardSteps>
      <WizardStep label="1" title="Configure" description={showDescription ? "Setup your stuff" : undefined} status="completed" />
      <WizardStep label="2" title="Connect services" description={showDescription ? "Github, zeit & netlify" : undefined} status="completed" />
      <WizardStep label="3" title="Review" description={showDescription ? "Check everything" : undefined} status="active" />
      <WizardStep label="4" title="Summary" description={showDescription ? "Nice list" : undefined} />
      <WizardStep label="5" title="Finish" description={showDescription ? "All done!" : undefined} />
    </WizardSteps>
  )
})

stories.addDecorator(centered)
.add('Step', () => {
  return (
    <WizardStep
      title={text('title', 'myTitle')}
      description={text('description', 'myDescription')}
      label={text('label', '1')}
      status={
        select(
          'status',
          [
            'none',
            'active',
            'completed'
          ],
          'none'
        )
      }
    />
  )
})
