import { Layout } from 'antd'
import React from 'react'

import AppContent from './AppContent'
import AppHeader from './AppHeader'
import AppSider from './AppSider'

const AppLayout: React.FC = () => {
  return (
    <Layout style={{ height: '100vh' }}>
      <AppHeader />
      <Layout>
        <AppSider />
        <AppContent />
      </Layout>
    </Layout>
  )
}

export default AppLayout
