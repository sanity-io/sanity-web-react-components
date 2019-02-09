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
      <div className={css.number}>
        <span>{status === 'completed' ? '✓' : label}</span>
      </div>
      <div>
        <h4 className={css.title}>{title}</h4>
        <p className={css.description}>{description}</p>
      </div>
    </li>
  )
}

export default WizardStep
