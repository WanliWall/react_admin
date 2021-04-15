/*
 * @Author: xuejian 
 * @Date: 2021-04-14 14:16:55 
 * @Last Modified by: xuejian
 * @Last Modified time: 2021-04-15 10:42:21
 */
import { withRouter } from 'react-router-dom'
import { Button, Modal } from 'antd'

import menuList from '../../config/menus'
import { getToken, removeToken } from '../../utils/auth'

import './index.less'

const Header = (props) => {
  const getTitle = () => {
    let navTitle = ''
    const path = props.location.pathname
    menuList.forEach(menu => {
      if(menu.key === path) {
        navTitle = menu.title
      } else if(menu.children) {
        // 找子路径
        const cItem = menu.children.find(cItem => path.indexOf(cItem.key) === 0)
        if(cItem) {
          navTitle = cItem.title
        }
      }
    })
    return navTitle
  }

  const logout = () => {
    Modal.confirm({
      content: '确定推出吗？',
      onOk: () => {
        removeToken()
        props.history.push('/login')
        console.log('到login', props)
      }
    })
  }

  const user = getToken()

  return (
    <div className="header">
      <div className="header-top">
        <span>{ user }</span>
        <Button onClick={ logout }>退出</Button>
      </div>
    </div>
  )
}

export default withRouter(Header)
