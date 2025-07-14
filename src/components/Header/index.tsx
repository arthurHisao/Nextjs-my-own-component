"use client"

import { Menu, Moon, Sun } from 'lucide-react'
import { DropdownButton, DropdownContent, DropdownItem } from '../Dropdown'
import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '@/context/ThemeContext'
import ToggleSwitch from '../ToggleSwitch'

export default function Header({ onClick }: { onClick: React.MouseEventHandler<HTMLButtonElement>}) {
  const { theme, toggleTheme } = useContext(ThemeContext) 
  const [ isDarkTheme, setDarkTheme ] = useState(false)  
    
  useEffect(() => {
    setDarkTheme(theme === 'dark')
  }, [theme])
    
  return (
    <>
      <div className="flex min-h-16 border-b sticky top-0 px-4">
        <nav className='flex justify-between items-center w-full'>
          <div className="">
            <button className='' onClick={onClick}>
              <Menu />
            </button>
          </div>
          <div className="inline-flex items-center gap-10">
            <div className="inline-flex gap-3">
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
    </>
  )
}
