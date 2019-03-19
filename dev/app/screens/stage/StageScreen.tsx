import * as React from 'react'
import { getDefaultData } from '../../lib/schema'
import stories from '../../stories'

import * as styles from './StageScreen.module.css'

interface Props {
  path?: string
  query?: {
    [key: string]: string
  }
  params: {
    patternIndex?: number
    storyName?: string
  }
}

function StageScreen(props: Props) {
  const { patternIndex, storyName } = props.params
  const story = stories.find(s => s.name === storyName)
  if (!story) return <div>Select a story</div>
  const pattern = typeof patternIndex === 'number' && story.patterns[patternIndex]
  if (!pattern) return <div>Select a pattern</div>
  const patternProps =
    props.query && props.query.props
      ? JSON.parse(props.query.props)
      : getDefaultData(Array.isArray(pattern.props) ? pattern.props : [])
  return (
    <div className={styles.root}>
      <div className={styles.stage}>{pattern.render(patternProps)}</div>
    </div>
  )
}

export default StageScreen
