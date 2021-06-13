import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import UserRegFormPage from './pages/UserRegForm'
impor ErrorPage from './pages/Error.jsx'


render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={UserRegFormPage} />
      <Route path="*" component={ErrorPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
)
