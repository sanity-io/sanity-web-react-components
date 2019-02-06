import * as React from 'react'
import { number, text, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import WizardStep, { Props as StepProps } from './WizardStep'
import WizardSteps from './WizardSteps'

const stories = storiesOf('Wizard', module)

const step: StepProps = {
  title: 'Step',
  description: 'A small step for man'
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

stories.add('Steps example', () => {
  return (
    <WizardSteps>
      <WizardStep label="1" title="Start" description="Getting started" status="completed" />
      <WizardStep label="2" title="Continue" description="Doing something" status="completed" />
      <WizardStep label="3" title="Extra step" description="Yes" status="active" />
      <WizardStep label="4" title="Summary" description="Yes" />
      <WizardStep label="5" title="Finish" description="Yes" />
    </WizardSteps>
  )
})

stories.add('Step', () => {
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
