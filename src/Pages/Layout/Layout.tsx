import React from 'react'
import { Outlet } from 'react-router'

function Layout() {
  return (
    <main className='mx-52'>
      <Outlet/>
    </main>
  )
}

export default Layout