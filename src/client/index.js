import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Routes from '../routes'
import { Provider } from 'react-redux'
import getStore from '../store'

const App = () => (
  <Provider store={getStore()}>
    <BrowserRouter>{Routes}</BrowserRouter>
  </Provider>
)

ReactDom.hydrate(<App />, document.querySelector('#root'))
