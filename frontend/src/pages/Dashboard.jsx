import { useContext } from 'react'
import AuthContext from '../context/AuthContext'

function Dashboard() {
  const { isAuthenticated } = useContext(AuthContext)

  return (
    <div>
      <h1>Dashboard</h1>
      <p>
        Authenticated: {isAuthenticated ? 'Yes' : 'No'}
      </p>
    </div>
  )
}

export default Dashboard