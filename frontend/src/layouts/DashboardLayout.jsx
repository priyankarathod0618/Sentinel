import { Outlet } from 'react-router-dom'

function DashboardLayout() {
  return (
    <div>
      <nav>Navbar</nav>

      <aside>Sidebar</aside>

      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default DashboardLayout