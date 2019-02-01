import * as React from 'react'
import { number } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import WizardStep, { Props as StepProps } from './WizardStep'
import WizardSteps from './WizardSteps'

const stories = storiesOf('Wizard', module)

const step: StepProps = {
  title: 'Step',
  description: 'A small step for man',
  status: 'completed',
}

stories.add('Steps', () => {
  const steps = [...Array(number('steps', 5))].map(() => ({ ...step }))
  return (
    <WizardSteps>
      {steps.map((step, i) => (
        <WizardStep {...step} label={`${i + 1}`} />
      ))}
    </WizardSteps>
  )
})

stories.add('Step', () => {
  return <WizardStep title="title" description="Description" label="1" status="completed" />
})
