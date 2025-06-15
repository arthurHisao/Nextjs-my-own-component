"use client"

import Link from 'next/link'
import { CircleSmall, LayoutDashboard } from 'lucide-react'
import { Accordion } from '../Accordion'

export default function Sidebar({ isSidebarCollapsed }: { isSidebarCollapsed: boolean }) {
    return (
        <>
            <aside className='w-full h-screen sticky top-0'>
                <div className='border-r h-full'>
                    <div className='h-16 w-full flex items-center justify-center border-b'>
                        <Link
                            href="#"
                            className={`text-2xl ${isSidebarCollapsed && 'whitespace-nowrap overflow-hidden'}`}
                        >
                            Your Logo
                        </Link>
                    </div>

                    <nav className='h-full w-full py-4 px-2.5'>
                        <ul className='inline-flex flex-col justify-start w-full h-full divide-y'>
                            <li className='py-1.5 rounded'>
                                <Link href="#" className='flex items-center gap-2 px-3'>
                                    <LayoutDashboard className='h-4 w-4'/>
                                    Dashboard 
                                </Link>
                            </li>
                            <li className='py-1.5 rounded'>
                                <Link href="#" className='flex items-center gap-2 px-3'>
                                    <CircleSmall className='h-4 w-4' />
                                    Product
                                </Link>
                            </li>         
                            <li className='py-1.5 rounded'>
                                <Link href="#" className='flex items-center gap-2 px-3'>
                                    <CircleSmall className='h-4 w-4' />
                                    Users
                                </Link>
                            </li>
                            <li className='py-1.5 rounded'>
                                <Accordion label='Permission' className="bg-indigo-500 rounded text-white font-medium">
                                    <p>Content should be rendered</p>
                                </Accordion>
                            </li>                           
                        </ul>
                    </nav>
                </div>
            </aside>
        </>
    )
}
