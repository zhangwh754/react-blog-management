import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Welcome to the Blog Management System</h1>
      <p>This is the home page of the blog management system.</p>

      <button onClick={() => navigate('/contact/1')}>navigate 1</button>
      <button style={{ marginLeft: '20px' }} onClick={() => navigate('/contact/2')}>
        navigate 2
      </button>
    </div>
  )
}

export default Home
