import { Breadcrumb, Layout, theme } from 'antd'
import React from 'react'
import { Outlet } from 'react-router-dom'

const { Content } = Layout

const AppContent: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  return (
    <Layout style={{ padding: '0 24px 24px' }}>
      <Breadcrumb
        items={[{ title: 'Home' }, { title: 'List' }, { title: 'App' }]}
        style={{ margin: '16px 0' }}
      />
      <Content
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: 24,
          margin: 0,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        <Outlet />
      </Content>
    </Layout>
  )
}

export default AppContent
