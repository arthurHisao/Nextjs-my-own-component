"use client"

import { Menu } from 'lucide-react'
import { DropdownButton, DropdownContent, DropdownItem } from '../Dropdown'


export default function Header({ onClick }: { onClick: React.MouseEventHandler<HTMLButtonElement>}) {
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
            <ul className="inline-flex gap-3">
              <li>Página 1</li>
              <li>Página 2</li>
              <li>Página 3</li>
            </ul>

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
