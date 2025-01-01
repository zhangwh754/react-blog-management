import React from 'react'
import { useParams } from 'react-router-dom'

const Contact: React.FC = () => {
  const { userId } = useParams<{ userId: string }>()

  // Simulate fetching user data based on userId
  const userData = [
    { id: '1', name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890' },
    { id: '2', name: 'Jane Smith', email: 'jane.smith@example.com', phone: '987-654-3210' },
  ]

  const user = userData.find(user => user.id === userId) || null

  return (
    <div>
      <div>Contact {userId} Information</div>

      {user ? (
        <>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </>
      ) : (
        <div>User not found</div>
      )}
    </div>
  )
}

export default Contact
