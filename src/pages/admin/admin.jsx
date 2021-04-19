import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'
import { RouteWithSubRoutes } from '../../router'

import Header from '../../layout/header'
import User from '../user'

import { getToken } from '../../utils/auth'
const { Footer, Sider, Content } = Layout

const Admin = ({ routes }) => {
  return (
    <Layout style={ { minHeight: '100%' } }>
      <Sider>
        侧边栏
      </Sider>
      <Layout>
        <Header />
        <Content>
          <Switch>
            {
              routes.map((route, i) => {
                <RouteWithSubRoutes key={i} {...route} />
              })
            }
            {/* <Route path="/admin/user" component={User} /> */}
          </Switch>
        </Content>
        <Footer style={{textAlign: 'center', color: '#cccccc'}}>推荐使用谷歌浏览器，可以获得更佳页面操作体验</Footer>
      </Layout>
    </Layout>
  )
}

export default Admin
