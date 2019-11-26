import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Routes from '../routes'

const App = () => (
  <BrowserRouter>
    {Routes}
  </BrowserRouter>
)

ReactDom.hydrate(<App />, document.querySelector('#root'))