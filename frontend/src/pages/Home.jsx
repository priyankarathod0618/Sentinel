import { Link } from 'react-router-dom'
import WelcomeMessage from '../components/WelcomeMessage'

function Home() {
  return (
    <div>
      <WelcomeMessage />

      <Link to="/login">Go to Login</Link>
    </div>
  )
}

export default Home