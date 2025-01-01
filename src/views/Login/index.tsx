import './index.css'

import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Card, Form, Input, message, Radio } from 'antd'
import React from 'react'

import { INDEX_PAGE } from '../../config'

interface LoginForm {
  username: string
  password: string
  role: 'admin' | 'user'
}

const Login: React.FC = () => {
  const [form] = Form.useForm()

  const handleSubmit = async (values: LoginForm) => {
    try {
      // Your login API call here
      localStorage.setItem('token', 'your-token')
      localStorage.setItem('role', values.role)
      message.success('Login successful!')
      // Force router refresh
      window.location.href = INDEX_PAGE
    } catch (error) {
      message.error(error instanceof Error ? error.message : 'An error occurred')
    }
  }

  return (
    <div className="login-container">
      <Card className="login-card" title="System Login">
        <Form
          form={form}
          name="login"
          initialValues={{ username: 'admin', password: '123456', role: 'admin' }}
          onFinish={handleSubmit}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" size="large" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" size="large" />
          </Form.Item>

          <Form.Item name="role" rules={[{ required: true, message: 'Please select a role!' }]}>
            <Radio.Group size="large" buttonStyle="solid" block>
              <Radio.Button value="admin" style={{ width: '50%', textAlign: 'center' }}>
                Admin
              </Radio.Button>
              <Radio.Button value="user" style={{ width: '50%', textAlign: 'center' }}>
                User
              </Radio.Button>
            </Radio.Group>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block size="large">
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login
