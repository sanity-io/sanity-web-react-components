import * as React from 'react'
import * as css from './WizardStep.module.css'

export interface Props {
  title: string
  label?: string
  status?: 'completed' | 'active'
  description?: JSX.Element | string
}

function WizardStep(props: Props) {
  const { label, title, description, status } = props
  return (
    <li className={css.root} data-status={status}>
      <div className={css.label}>{label}</div>
      <div>
        <h5 className={css.title}>{title}</h5>
        <p className={css.description}>{description}</p>
      </div>
    </li>
  )
}

export default WizardStep
