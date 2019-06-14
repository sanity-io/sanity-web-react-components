import * as qs from 'qs'
import * as React from 'react'

interface Props {
  path: string
  query?: { [key: string]: string }
}

class IFrame extends React.Component<Props> {
  iframe?: HTMLIFrameElement

  setIframe = (iframe: HTMLIFrameElement) => {
    this.iframe = iframe
  }

  shouldComponentUpdate(nextProps: Props) {
    if (this.iframe && this.iframe.contentWindow) {
      this.iframe.contentWindow.postMessage(
        JSON.stringify({
          type: 'history/replaceState',
          path: nextProps.path,
          query: nextProps.query,
        }),
        '*',
      )
      return false
    }
    return true
  }

  render() {
    const search = qs.stringify(this.props.query || {})
    const src = this.props.path + (search ? `?${search}` : '')
    return <iframe src={src} ref={this.setIframe} />
  }
}

export default IFrame
