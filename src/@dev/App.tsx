import * as React from 'react'
import { withPropsStream } from 'react-props-stream'
import { merge } from 'rxjs'
import matchRoute from './matchRoute'
import { location$ } from './streams/history'

// Import screens
import { RootScreen } from './screens/root'
import { StageScreen } from './screens/stage'

interface Props {
  path?: string
  query?: {
    [key: string]: string
  }
}

function App(props: Props) {
  const route = matchRoute(props.path)
  switch (route.name) {
    case 'root':
      return <RootScreen {...props} params={route.params} />
    case 'stage':
      return <StageScreen {...props} params={route.params} />
    default:
      return <div>Not found: {props.path}</div>
  }
}

const StreamingApp = withPropsStream<Props, Props>(
  (props$: any): any => merge(props$, location$),
  (props: Props) => <App {...props} />,
)

export default StreamingApp
