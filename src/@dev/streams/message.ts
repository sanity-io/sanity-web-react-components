import { Subject } from 'rxjs'

export const message$ = new Subject()

if (typeof window !== 'undefined') {
  window.addEventListener('message', (evt: any) => {
    try {
      const msg = JSON.parse(evt.data)
      message$.next(msg)
    } catch (err) {
      // console.warn(`Could not parse message:`, evt.data)
    }
  })
}
