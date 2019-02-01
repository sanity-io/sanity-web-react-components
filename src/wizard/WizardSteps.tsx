import * as React from 'react'
import * as css from './WizardSteps.module.css'

export interface Props {
  children: any
}

function WizardSteps(props: Props) {
  const { children } = props
  return <ol className={css.root}>{children}</ol>
}

export default WizardSteps
