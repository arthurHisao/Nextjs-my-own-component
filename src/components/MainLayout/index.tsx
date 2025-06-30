"use client"

import { useState } from 'react'
import Sidebar from '../Sidebar'
import Header from '../Header'
import { SidebarContext } from '@/context/SidebarContext'
import { ThemeProvider } from '@/context/ThemeContext'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [ isSidebarCollapsed, setSidebarCollapsed ] = useState(false)

  const handleToggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed)
  }

  return (
    <ThemeProvider>
      <div className="relative flex flex-row justify-end flex-wrap h-screen">
        <SidebarContext value={isSidebarCollapsed}>
          <div 
            className={`
              flex ${isSidebarCollapsed ? 'w-16 collapse-sidebar' : 'flex-2 w-64 collapse-sidebar-2'}
            `}
          >
            <Sidebar />
          </div>

          <div className='flex flex-10'>
            <main className='w-full'>
              <Header onClick={handleToggleSidebar} />
              { children }
            </main>
          </div>
        </SidebarContext>
      </div>
    </ThemeProvider>  
  )
}

