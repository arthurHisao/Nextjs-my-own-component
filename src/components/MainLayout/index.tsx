"use client"

import { useState } from 'react'
import Sidebar from '../Sidebar'
import Header from '../Header'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [ isSidebarCollapsed, setSidebarCollapsed ] = useState(false)

  const handleToggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed)
  }

  return (
    <div className="relative flex flex-row justify-end flex-wrap h-screen">
        <div 
            className={`
                flex ${isSidebarCollapsed ? 'w-16' : 'flex-2 '}
            `}
        >
            <Sidebar isSidebarCollapsed />
        </div>

        <div className='flex flex-10'>
            <main className='w-full'>
                <Header onClick={handleToggleSidebar} />
                { children }
            </main>
        </div>
    </div>
  )
}

