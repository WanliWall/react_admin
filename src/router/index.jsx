import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import routes from './routerConfig'

export default function RouteConf() {
  return (
    <Router>
      <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
      </Switch>
    </Router>
  )
}

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
export function RouteWithSubRoutes(route) {
  return (
    <Route 
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  )
}
