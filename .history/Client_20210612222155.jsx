import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import UserRegFormPage from './pages/UserRegForm'

render(
  <BrowserRouter>
  <Route exact path='/' component={UserRegFormPage} /></BrowserRouter>
  document.getElementById('root'),
)