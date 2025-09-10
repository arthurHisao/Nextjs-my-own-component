import React from 'react'
import { Menu, ChevronUp } from 'lucide-react'
import Image from 'next/image'

export default function Avatar() {
  return (
    <button className='inline-flex items-center gap-0.5 cursor-pointer'>
        <span className='pr-1'>User name</span>
        <Image
          src="/images/default.png"
          alt="default user avatar"
          width={40}
          height={40}
        />
        <ChevronUp className='w-4 h-4' />
    </button>
  )
}
