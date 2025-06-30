"use client"

import { Menu, Moon, Sun } from 'lucide-react'
import { DropdownButton, DropdownContent, DropdownItem } from '../Dropdown'
import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '@/context/ThemeContext'

export default function Header({ onClick }: { onClick: React.MouseEventHandler<HTMLButtonElement>}) {
  const [ isDarkTheme, setTheme ] = useState(false)
  const { theme, toggleTheme } = useContext(ThemeContext) 

  useEffect(() => {
    setTheme(theme === 'dark' ? true : false)
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
              <label
                htmlFor="change-mode"
                className="block rounded-full w-12 h-6 relative cursor-pointer border border-gray-300 dark:border-white/15 bg-gray-200 text-gray-700 dark:bg-slate-700 dark:text-white"
              >
                <span
                  className={`
                    block relative w-[22px] h-[22px] top-0 bottom-0 left-0 right-0 rounded-full ease duration-300 cursor-pointer bg-white shadow
                    ${isDarkTheme ? 'translate-x-[24px] bg-slate-900' : 'translate-x-0'}
                  `}
                >
                  {isDarkTheme ? (
                    <Moon className='absolute top-0 left-0 right-0 p-[4px] w-[22px] h-[22px] rounded-full' />
                  ) : (
                    <Sun className='absolute top-0 left-0 right-0 p-[4px] w-[22px] h-[22px] rounded-full'/>
                  )}
                </span>
                <input
                  type="checkbox"
                  id="change-mode"
                  className="opacity-0 w-0 h-0"
                  onClick={toggleTheme}
                />
              </label>
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
