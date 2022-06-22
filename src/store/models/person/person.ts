import { createModel } from '@rematch/core'
import { Dispacth, RootModel } from '..'
import { Person } from './person.types'

export const person = createModel<RootModel>()({
  state: {
    person: 0
  } as Person,
  reducers: {
    increament(state, payload: Person) {
      return { ...state, person: state.person + payload.person }
    }
  },
  effects: dispacth => ({
    increamentAsync(payload: Person, state) {
      dispacth.person.increament(payload)
    }
  })
})
