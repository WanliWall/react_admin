import { Redirect } from 'react-router-dom'
import { Card, Form, Input, Button } from 'antd'
import { userLogin } from '../../api/user'
import storageUtils from '../../utils/storeageUtils'
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
const user = storageUtils.get('user_key')

const Login = (props) => {
  const onFinish = (values) => {
    console.log('Success:', values)
    userLogin({
      name: values.username,
      password: values.password
    }).then(res => {
      storageUtils.save('user_key', res.data.data)
      props.history.replace('/')
    })
  }

  if(user && user.id) {
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
