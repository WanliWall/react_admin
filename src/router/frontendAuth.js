import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import routers from './routerConfig'
import { getToken } from '../utils/auth'

class FrontendAuth extends React.Component {
  render() {
    const pathname = this.props.location.pathname
    const targetRouter = routers.find(item => {
      return item.path === pathname
    })

    const isLogin = getToken()

    if(pathname === '/') {
      return <Redirect to="/login" />
    }
    // 未定义的路由
    if(!targetRouter) {
      return <Redirect to="/404"  />
    }

    if(isLogin) {
      if(pathname === '/login') {
        return <Redirect to='/admin' />
      } else {
        return <Route exact path={pathname} component={targetRouter.component} />
      }
    } else {
      if(targetRouter.auth) {
        console.log('请先登录')
        return <Redirect exact to='/login' />
      } else {
        return <Route exact path={pathname} component={targetRouter.component} />
      }
    }
  }
}

export default FrontendAuth
