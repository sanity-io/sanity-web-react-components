import * as qs from 'qs'
import { Subject, merge } from 'rxjs'
import { filter, map, tap } from 'rxjs/operators'
import { message$ } from './message'

import { PushStateMsg } from '../types'

const locationSubject = new Subject()

export function pushState(msg: PushStateMsg, ignorePublish?: boolean) {
  const query = msg.query || {}
  const search = qs.stringify(query)
  const url = msg.path + (search ? `?${search}` : '')
  if (!ignorePublish) locationSubject.next({ path: msg.path, query })
  window.history.pushState(null, document.title, url)
}

export function replaceState(msg: PushStateMsg, ignorePublish?: boolean) {
  const query = msg.query || {}
  const search = qs.stringify(query)
  const url = msg.path + (search ? `?${search}` : '')
  if (!ignorePublish) locationSubject.next({ path: msg.path, query })
  window.history.replaceState(null, document.title, url)
}

if (typeof window !== 'undefined') {
  window.addEventListener('popstate', () => {
    locationSubject.next({ path: window.location.pathname })
  })
}

const externalPushState$ = message$.pipe(
  filter((msg: any) => msg.type === 'history/pushState'),
  map((msg: any) => ({ path: msg.path, query: msg.query })),
  tap(msg => pushState(msg, false)),
)

const externalReplaceState$ = message$.pipe(
  filter((msg: any) => msg.type === 'history/replaceState'),
  map((msg: any) => ({ path: msg.path, query: msg.query })),
  tap(msg => replaceState(msg, false)),
)

export const location$ = merge(locationSubject, externalPushState$, externalReplaceState$)
