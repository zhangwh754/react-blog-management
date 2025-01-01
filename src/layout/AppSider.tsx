// import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Layout, Menu, theme } from 'antd'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { createSideMenu } from '../router'

const { Sider } = Layout

const AppSider: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const {
    token: { colorBgContainer },
  } = theme.useToken()

  const isAuthenticated = localStorage.getItem('token') !== null
  const userRole = localStorage.getItem('role') as 'admin' | 'user'
  const menus = createSideMenu(isAuthenticated, userRole) as MenuProps['items']

  console.log(JSON.stringify(menus))

  // Get current selected keys based on pathname
  const selectedKeys = [location.pathname.split('/')[1] || 'home']
  const openKeys = location.pathname.split('/').filter(Boolean)

  const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
    navigate(`${key}`)
  }

  return (
    <Sider width={200} style={{ background: colorBgContainer }}>
      <Menu
        mode="inline"
        selectedKeys={selectedKeys}
        defaultOpenKeys={openKeys}
        style={{ height: '100%', borderRight: 0 }}
        items={menus}
        onClick={handleMenuClick}
      />
    </Sider>
  )
}

export default AppSider
