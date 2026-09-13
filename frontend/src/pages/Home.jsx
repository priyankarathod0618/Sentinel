import { useEffect } from 'react'
import apiRequest from '../api/api'

function Home() {

  useEffect(() => {
    apiRequest('/health')
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  return (
    <div>
      <h1>Sentinel</h1>
    </div>
  )
}

export default Home