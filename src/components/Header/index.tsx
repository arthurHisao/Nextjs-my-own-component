"use client"

import { Menu } from 'lucide-react'
import { DropdownButton, DropdownItem } from '../Dropdown'

export default function Header() {
  return (
    <>
      <nav className="flex justify-between items-center px-4 w-full min-h-16 shadow">
        <div className="">
          <button>
            <Menu/>
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
            <DropdownItem label='Link 1'/>
            <DropdownItem label='Link 2'/>
            <DropdownItem label='Link 3'/>
          </DropdownButton>
        </div>
      </nav>
    </>
  )
}
