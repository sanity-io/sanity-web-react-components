import { BooleanType, FieldType, NumberType, StringType, TextType } from './types'

export function getDefaultData(fields: FieldType[]) {
  return fields.reduce(
    (acc, field) => {
      switch (field.type) {
        case 'boolean': {
          const booleanType = field as BooleanType
          if (booleanType.default !== undefined) {
            acc[field.name] = booleanType.default
          }
          return acc
        }
        case 'number': {
          const numberType = field as NumberType
          if (numberType.default !== undefined) {
            acc[field.name] = numberType.default
          }
          return acc
        }
        case 'string': {
          const stringType = field as StringType
          if (stringType.default !== undefined) {
            acc[field.name] = stringType.default
          }
          return acc
        }
        case 'text': {
          const textType = field as TextType
          if (textType.default !== undefined) {
            acc[field.name] = textType.default
          }
          return acc
        }
        default:
          return acc
      }
    },
    {} as any,
  )
}
