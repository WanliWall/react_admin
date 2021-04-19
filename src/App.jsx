import React, { Suspense  } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import FrontendAuth from './router/frontendAuth'
import RouteConf from './router'

import Login from './pages/login/login'
import Admin from './pages/admin/admin'

function App(props) {
  return (
    // <Router>
    //     <Switch>
    //       <Route exact path="/" component={Admin}></Route>
    //       <Route path="/login" component={Login}></Route>
    //     </Switch>
    // </Router>
    <Suspense fallback={<div>loading...</div>}>
      <RouteConf />
    </Suspense>
  )
}

export default App
