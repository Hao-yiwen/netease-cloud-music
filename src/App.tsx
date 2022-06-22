// eslint-disable-next-line
import * as React from 'react'
import { store } from './store/store'
import { Provider } from 'react-redux'
import { Home } from './views/Home'

const App = (): React.ReactElement => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  )
}

export default App
