export interface BooleanType {
  type: 'boolean'
  name: string
  label: string
  default: boolean
}

interface StringOption {
  label: string
  value: string
}

export interface StringType {
  type: 'string'
  name: string
  label: string
  options?: StringOption[]
  default?: string
}

interface NumberOption {
  label: string
  value: number
}

export interface NumberType {
  type: 'number'
  name: string
  label: string
  options?: NumberOption[]
  default?: number
}

export interface TextType {
  type: 'text'
  name: string
  label: string
  default?: string
}

export interface UnknownType {
  type: string
  label: string
  name: string
}

export type FieldType = BooleanType | StringType | TextType | UnknownType
