import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ErrorPage from './pages/Error'
import UserRegForm from './pages/UserRegForm'

render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={UserRegForm} />
      <Route path="*" component={ErrorPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
)
