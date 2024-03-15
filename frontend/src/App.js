import React from 'react'
import MyRoutes from './MyRoutes'
import "./style/demo1.css"
import { Provider } from 'react-redux'
import {store} from './component/Reducers/store'

const App = () => {
  return (
    <>
    <Provider store={store}>
      <MyRoutes/>
    </Provider>
    </>
  )
}

export default App