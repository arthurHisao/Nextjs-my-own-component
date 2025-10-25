"use client"

import { Menu, Moon, Sun } from 'lucide-react'
import { DropdownButton, DropdownContent, DropdownItem } from '../Dropdown'
import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '@/context/ThemeContext'
import { SidebarContext } from '@/context/SidebarContext'
import ToggleSwitch from '../ToggleSwitch'

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext) 
  const { isMobileScreen, handleToggleSidebar } = useContext(SidebarContext) 
  const [ isDarkTheme, setDarkTheme ] = useState(false)  
    
  useEffect(() => {
    setDarkTheme(theme === 'dark')
  }, [theme])
    
  return (
      <div className="flex min-h-16 sticky top-0 px-4 elevate-2 dark:border-[#151c23] border-b">
        <nav className='flex justify-between items-center w-full'>

          <button onClick={handleToggleSidebar} className='cursor-pointer'>
            <Menu/>
          </button>

          <div className="inline-flex items-center gap-10">
            <div className="inline-flex gap-3">
              {!isMobileScreen && (
                <ToggleSwitch
                  parentEvent={toggleTheme}
                  isActive={isDarkTheme}
                >
                  {isDarkTheme ? (
                    <Moon className='absolute top-0 left-0 right-0 p-[4px] w-[22px] h-[22px] rounded-full bg-gray-300' />
                    ) : (
                    <Sun className='absolute top-0 left-0 right-0 p-[4px] w-[22px] h-[22px] rounded-full'/>
                  )}
                </ToggleSwitch>
              )}
            </div>

            <DropdownButton 
              label='User Name'
              withAvatar
            >
              <DropdownContent className='top-3'>
                <DropdownItem label='Link 1'/>
                <DropdownItem label='Link 2'/>
                <DropdownItem label='Link 3'/>
              </DropdownContent>
            </DropdownButton>
          </div>
        </nav>
      </div>
  )
}
