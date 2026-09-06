import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

function Login() {
  const { setIsAuthenticated, setUser } = useContext(AuthContext)
  const navigate = useNavigate()

  function handleLogin() {
    setIsAuthenticated(true)

    setUser({
      name: 'Priyanka',
      email: 'priyanka@example.com',
    })

    navigate('/dashboard')
  }

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login