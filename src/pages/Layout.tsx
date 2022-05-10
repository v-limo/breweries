import { Outlet } from 'react-router'

import Footer from '../components/Footer'
import Header from '../components/Header'

function Layout() {
  return (
    <div className='min-h-screen bg-gray-300 text-md'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
