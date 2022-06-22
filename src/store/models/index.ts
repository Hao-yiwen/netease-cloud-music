// @filename: models.ts
import { Models, RematchDispatch } from '@rematch/core'

import { count } from './count/count'
import { person } from './person/person'

export interface RootModel extends Models<RootModel> {
  count: typeof count,
  person: typeof person
}
export const models: RootModel = { count, person }

export type Dispacth = RematchDispatch<RootModel>
