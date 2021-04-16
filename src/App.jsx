import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './pages/login/login'
import Admin from './pages/admin/admin'

function App(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Admin}></Route>
        <Route path="/login" hisotory={props.hisotory} component={Login}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
