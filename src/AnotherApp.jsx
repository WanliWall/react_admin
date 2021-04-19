import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import routerConfig from "./router/routerConfig";
import { getToken } from "./utils/auth";
import NotFound from './pages/404/notFound'
const token = getToken()
function App(props) {
  return (
    
    <Router>
      <div>
      <Suspense fallback={<div>loading...</div>}>
        <Switch>
          {routerConfig.map((item, index) => {
            return (
              <Route
                key={index}
                path={item.path}
                exact
                render={(props) =>
                  !item.auth ? (
                    <item.component {...props} />
                  ) : token ? (
                    <item.component {...props} />
                  ) : (
                    <Redirect
                      to={{
                        pathname: "/login",
                        state: { from: props.location },
                      }}
                    />
                  )
                }
              />
            );
          })}
          <Route component={NotFound} />
        </Switch>
    </Suspense>
      </div>
    </Router>
  );
}

export default App;
