import { init } from '@rematch/core'
import { models } from './models'

export const store = init({
  models
})

export const { dispacth } = store
