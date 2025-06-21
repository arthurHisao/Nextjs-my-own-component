"use client"

import { Menu, Moon, Sun } from 'lucide-react'
import { DropdownButton, DropdownContent, DropdownItem } from '../Dropdown'
import { useState } from 'react'


export default function Header({ onClick }: { onClick: React.MouseEventHandler<HTMLButtonElement>}) {
  const [ isDarkTheme, setTheme ] = useState(false)

  const handleToggleDark = () => {
    setTheme(!isDarkTheme)
  }

  return (
    <>
      <div className="flex min-h-16 border-b sticky top-0 bg-white px-4">
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
                className="block rounded-full w-12 h-7 relative cursor-pointer border border-gray-300 dark:border-white/15 bg-gray-200 text-gray-700 dark:bg-slate-700 dark:text-white"
              >
                <span
                  className={`
                    block relative w-6 h-6 top-[1px] bottom-0 left-0 right-0 rounded-full ease duration-300 cursor-pointer bg-white
                    ${isDarkTheme ? 'translate-x-[21px] bg-slate-900' : 'translate-x-px'}
                  `}
                >
                  {isDarkTheme ? (
                    <Moon className='absolute top-0 left-0 right-0 p-1 w-6 h-6 rounded-full' />
                  ) : (
                    <Sun className='absolute top-0 left-0 right-0 p-1 w-6 h-6 rounded-full'/>
                  )}
                </span>
                <input
                  type="checkbox"
                  id="change-mode"
                  className="opacity-0 w-0 h-0"
                  onClick={handleToggleDark}
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
