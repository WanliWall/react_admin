import React from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import { Card, Form, Input, Button } from 'antd'
import { userLogin } from '../../api/user'
import { setToken, getToken } from '../../utils/auth'
import './login.less'

const layout = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 10
  },
}
const tailLayout = {
  wrapperCol: {
    offset: 6,
    span: 6
  }
}
const user = getToken()

const Login = (props) => {
  // let history = useHistory()

  const onFinish = (values) => {
    console.log('Success:', values)
    userLogin({
      name: values.username,
      password: values.password
    }).then(res => {
      console.log(res)
      // setToken(res.data.data.name)
      props.history.push('/')
      console.log('到首页')
    })
  }

  if(user) {
    return <Redirect to='/'/>
  }
  
  return (
    <div className="login">
      <Card title="登录" bordered={false} style={{ width: 500 }}>
        <Form
          {...layout}
          name="登录"
          onFinish={onFinish}
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">登录</Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login
