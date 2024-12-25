import { Breadcrumb, Layout, theme } from 'antd'
import React from 'react'

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
        {Array.from({ length: 1000 }).map((_, index) => (
          <div>{index}</div>
        ))}
      </Content>
    </Layout>
  )
}

export default AppContent
