import { FieldType } from './lib/schema/types'

export interface Pattern {
  title: string
  props?: FieldType[]
  render: (props: any) => any
}

export interface Story {
  name: string
  title: string
  patterns: Pattern[]
}

export interface PushStateMsg {
  path?: string
  query?: {
    [key: string]: string
  }
}
