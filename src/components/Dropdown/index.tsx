import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface IDropdownProps {
  label: string
  withAvatar?: boolean
  children: React.ReactNode
}

export function DropdownButton({ children, label, withAvatar }: IDropdownProps) {
  const [ isDropdownShown, setDropdownState ] = useState(false)
    
  const handleClick = () => {
    setDropdownState(!isDropdownShown)
  }

  return (
    <>
      <div className={`absolute top-0 left-0 right-0 h-screen w-full z-40 overflow-hidden ${isDropdownShown ? 'block' : 'hidden'}`} onClick={() => setDropdownState(!isDropdownShown)}/>
      <div className='relative'>

        <button 
          className='inline-flex items-center gap-0.5 cursor-pointer' 
          onClick={handleClick}
        >
          <span className='pr-1'>{label}</span> 
          {withAvatar && (
            <Image
              src="/images/default.png"
              alt="user avatar"
              width={40}
              height={40}
            />
          )} 
          <ChevronDown className={`w-4 h-4 transition ease-out duration-150 ${isDropdownShown ? 'rotate-180' : 'rotate-none'}`}/>
        </button>

        <div
          onClick={handleClick} 
          className={`relative ${isDropdownShown ? 'block' : 'hidden'}`}
        >
         { children }
        </div>
      </div>
    </>
  )
}


interface DropdownContent {
  children: React.ReactNode
  className?: string
}

export function DropdownContent({ children, className = '' }: DropdownContent) {
  return (
    <>
      <ul className={`bg-gray-50 divide-y-1 divide-gray-300/60 absolute top-0 left-0 right-0 z-50 ${className}`}>
        { children }
      </ul>
    </>
  )
}

interface DropdownItemProps {
  to?: string
  label: string
}

export function DropdownItem({ to = '', label }: DropdownItemProps) {
  return (
    <>
      <li className='flex bg-gray-50 divide-y-8 divide-y-reverse divide-amber-900'>
        <Link href={to} className={`w-full px-3 py-1.5 hover:bg-gray-200/65`}>
          { label }
        </Link>
      </li>
    </>
  )
}
