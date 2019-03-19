import * as React from 'react'
import { getDefaultData } from '../../lib/schema'
import stories from '../../stories'
import { pushState, replaceState } from '../../streams/history'
import IFrame from './IFrame'
import PropsForm from './PropsForm'

import * as styles from './RootScreen.module.css'

type Props = {
  path?: string
  query?: {
    [key: string]: string
  }
  params: {
    patternIndex?: number
    storyName?: string
  }
}

function RootScreen(props: Props) {
  const { patternIndex, storyName } = props.params
  const story = stories.find(s => s.name === storyName)
  const pattern = story && typeof patternIndex === 'number' && story.patterns[patternIndex]
  const patternProps =
    props.query && props.query.props
      ? JSON.parse(props.query.props)
      : getDefaultData(pattern && Array.isArray(pattern.props) ? pattern.props : [])

  function handleNavigate(evt: any) {
    evt.preventDefault()
    const target: any = evt.target.closest('a')
    pushState({ path: target.pathname })
  }

  function handleChange(key: string, value: any) {
    replaceState({
      path: props.path || '/',
      query: { props: JSON.stringify({ ...patternProps, [key]: value }) },
    })
  }

  return (
    <div className={styles.root}>
      <div className={styles.nav}>
        <h1>Components</h1>
        <ul className={styles.storyList}>
          {stories.map(({ name, patterns, title }: any) => (
            <li key={title}>
              <h2>{title}</h2>
              <ul>
                {patterns.map((pattern: any, idx: number) => {
                  return (
                    <li key={pattern.title}>
                      <a href={`/story/${name}/${idx}`} onClick={handleNavigate}>
                        {pattern.title}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.stage}>
        {story && (
          <IFrame
            path={`/stage/${story.name}/${patternIndex}`}
            query={{ props: JSON.stringify(patternProps) }}
          />
        )}
      </div>
      <div className={styles.props}>
        {pattern && pattern.props && (
          <PropsForm data={patternProps} fields={pattern.props} onChange={handleChange} />
        )}
      </div>
    </div>
  )
}

export default RootScreen
