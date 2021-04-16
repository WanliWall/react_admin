import React, { Suspense  } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import FrontendAuth from './router/frontendAuth'

import Login from './pages/login/login'
import Admin from './pages/admin/admin'

function App(props) {
  return (
    <BrowserRouter>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Switch>
          <Route exact path="/" component={Admin}></Route>
          <Route path="/login" component={Login}></Route>
          {/* <FrontendAuth /> */}
        </Switch>
      {/* </Suspense> */}
    </BrowserRouter>
  )
}

export default App
