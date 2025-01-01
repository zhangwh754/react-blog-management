import { EditOutlined, SearchOutlined } from '@ant-design/icons'
import { Button, Card, Input, Space, Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface ContactType {
  id: number
  name: string
  email: string
  phone: string
  company?: string
}

const ContactList: React.FC = () => {
  const [contacts, setContacts] = useState<ContactType[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [searchText, setSearchText] = useState<string>('')

  // Mock data - replace with actual API call
  useEffect(() => {
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      setContacts([
        {
          id: 1,
          name: 'John Doe',
          email: 'john@example.com',
          phone: '123-456-7890',
          company: 'ABC Corp',
        },
        {
          id: 2,
          name: 'Jane Smith',
          email: 'jane@example.com',
          phone: '098-765-4321',
          company: 'XYZ Inc',
        },
      ])
      setLoading(false)
    }, 1000)
  }, [])

  const columns: ColumnsType<ContactType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      filteredValue: [searchText],
      onFilter: (value, record) => {
        return (
          record.name.toLowerCase().includes(value.toString().toLowerCase()) ||
          record.email.toLowerCase().includes(value.toString().toLowerCase()) ||
          record.phone.toLowerCase().includes(value.toString().toLowerCase())
        )
      },
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Company',
      dataIndex: 'company',
      key: 'company',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <Button type="primary" icon={<EditOutlined />} onClick={() => handleDetail(record)}>
            Detail
          </Button>
        </Space>
      ),
    },
  ]

  const navigate = useNavigate()

  const handleDetail = (record: ContactType) => {
    navigate(`/contact/${record.id}`)
  }

  return (
    <Card title="Contact List">
      <Space style={{ marginBottom: 16 }}>
        <Input
          placeholder="Search contacts..."
          prefix={<SearchOutlined />}
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
      </Space>
      <Table columns={columns} dataSource={contacts} loading={loading} rowKey="id" />
    </Card>
  )
}

export default ContactList
