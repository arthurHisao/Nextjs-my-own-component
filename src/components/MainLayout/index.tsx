"use client"

import Sidebar from '../Sidebar'
import Header from '../Header'
import { SidebarProvider } from '@/context/SidebarContext'
import { ThemeProvider } from '@/context/ThemeContext'
import Breadcrumbs from '../Breadcrumbs'

export default function MainLayout({ children }: { children: React.ReactNode }) {


  return (
    <ThemeProvider>
      <div className="relative flex lg:flex-row justify-end flex-wrap h-screen">
        <SidebarProvider>
          <Sidebar /> 
          <section className='flex flex-10'>
            <main className='w-full h-full'>
              <Header />
              <Breadcrumbs/>
              { children }
            </main>
          </section>
        </SidebarProvider>
      </div>
    </ThemeProvider>  
  )
}

