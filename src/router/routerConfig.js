import { lazy } from 'react'

const Login = lazy(() => import('../pages/login/login'))
const Admin = lazy(() => import('../pages/admin/admin'))
const Category = lazy(() => import('../pages/category'))
const User = lazy(() => import('../pages/user'))
const NotFound = lazy(() => import('../pages/404/notFound'))


const routes = [
  // {
  //   path: "/",
  //   component: Admin,
  //   auth: true
  // },
  {
    path: "/login",
    component: Login,
    auth: false
  },
  {
    path: "/admin",
    component: Admin,
    auth: true,
    routes: [
      {
        path: "/admin/category",
        component: Category,
        auth: true
      },
      {
        path: "/admin/user",
        component: User,
        auth: true
      }
    ]
  },
  // {
  //   path: '/404',
  //   component: NotFound,
  //   auth: false
  // }
]

export default routes
