import * as React from 'react'
import * as css from './WizardStep.module.css'

export interface Props {
  title: string
  label?: JSX.Element | string
  status?: 'completed' | 'active' | 'none'
  description?: JSX.Element | string
}

function WizardStep(props: Props) {
  const { label, title, description, status } = props
  return (
    <li className={css.root} data-status={status}>
      <div className={css.label}>
        <span>{status === 'completed' ? '✓' : label}</span>
      </div>
      <div>
        <h5 className={css.title}>{title}</h5>
        <p className={css.description}>{description}</p>
      </div>
    </li>
  )
}

export default WizardStep
