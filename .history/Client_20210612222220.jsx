import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import UserRegFormPage from './pages/UserRegForm'

render(
  <BrowserRouter>
  <Switch
  <Route exact path='/' component={UserRegFormPage} />
  <Route path="*" component={ErrorPage} />
  </BrowserRouter>
  document.getElementById('root'),
)
