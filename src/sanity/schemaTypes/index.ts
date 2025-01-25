import { type SchemaTypeDefinition } from 'sanity'
import food from './food'
import chief from './chief'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [food,chief],
}
