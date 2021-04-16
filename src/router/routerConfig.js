import { lazy } from 'react'

const Login = lazy(() => import('../pages/login/login'))
const Admin = lazy(() => import('../pages/admin/admin'))
const Admin1 = lazy(() => import('../pages/admin/admin'))
const NotFound = lazy(() => import('../pages/404/notFound'))


const routers = [
  {
    path: "/login",
    component: Login,
    auth: false
  },
  {
    path: "/",
    component: Admin,
    auth: true
  },
  {
    path: "/admin",
    component: Admin,
    auth: true
  },
  {
    path: "/admin1",
    component: Admin1,
    auth: true
  },
  {
    path: '/404',
    component: NotFound,
    auth: false
  }
]

export default routers
