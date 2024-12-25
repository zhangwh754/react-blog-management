// AppHeader
import { Layout } from 'antd'
import React from 'react'

const { Header } = Layout

const AppHeader: React.FC = () => {
  return (
    <Header style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ color: '#fff' }}>Header</div>
    </Header>
  )
}

export default AppHeader
