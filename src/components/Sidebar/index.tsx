"use client"

import Link from 'next/link'
import { CircleSmall, LayoutDashboard } from 'lucide-react'
import { Accordion } from '../Accordion'
import { useContext } from 'react'
import { SidebarContext } from '@/context/SidebarContext'

export default function Sidebar() {
    const isSidebarCollapsed = useContext(SidebarContext)
    console.log('isSidebarCollapsed', isSidebarCollapsed)

    const getInitials = (text: string) => {
        const initial = text.split(' ').map(word => word[0])
        const getInitialLetters = initial[0] + initial[initial.length -1]
        return getInitialLetters.toUpperCase()
    }

    return (
        <>
            <aside className='w-full h-screen sticky top-0'>
                <div className='border-r h-full'>
                    <div className='h-16 w-full flex items-center border-b px-2.5'>
                        <Link
                            href="#"
                            className='text-xl w-full whitespace-nowrap'
                        >
                            <div className='inline-flex items-center'>
                                <span className="w-[43px] h-[43px] bg-amber-300 rounded-full inline-flex items-center justify-center shadow text-sm font-bold">
                                    { getInitials('Your Logo') }
                                </span>
                                <span className={`
                                    ${isSidebarCollapsed 
                                        ? 'opacity-0 invisible collapse-sidebar-text-2' 
                                        : 'opacity-100 visible collapse-sidebar-text ml-2'
                                    }
                                    overflow-hidden
                                `}>
                                    Your Logo
                                </span>
                            </div>
                        </Link>
                    </div>

                    <nav className='h-full w-full py-4 px-2.5'>
                        <ul className='inline-flex flex-col justify-start w-full h-full divide-y'>
                            <li className='py-1.5 rounded'>
                                <Link href="#" className='flex items-center px-3'>
                                    <div className="inline-flex items-center">
                                        <LayoutDashboard className='h-4 w-4'/>
                                        <span className={`
                                            ${isSidebarCollapsed 
                                                ? 'opacity-0 invisible collapse-sidebar-text-2' 
                                                : 'opacity-100 visible collapse-sidebar-text ml-2'
                                            }
                                        `}>
                                            Dashboard
                                        </span>
                                    </div>
                                </Link>
                            </li>
                            <li className='py-1.5 rounded'>
                                <Link href="#" className='flex items-center px-3'>
                                    <div className="inline-flex items-center">
                                        <CircleSmall className='h-4 w-4' />                                        
                                         <span className={`
                                            ${isSidebarCollapsed 
                                                ? 'opacity-0 invisible collapse-sidebar-text-2' 
                                                : 'opacity-100 visible collapse-sidebar-text ml-2'
                                            }
                                        `}>
                                            Product
                                        </span>
                                    </div>
                                </Link>
                            </li>         
                            <li className='py-1.5 rounded'>
                                <Link href="#" className='flex items-center px-3'>
                                    <div className="inline-flex items-center">
                                        <CircleSmall className='h-4 w-4' />
                                        <span className={`
                                            ${isSidebarCollapsed 
                                                ? 'opacity-0 invisible collapse-sidebar-text-2' 
                                                : 'opacity-100 visible collapse-sidebar-text ml-2'
                                            }
                                        `}>
                                            Users
                                        </span>
                                    </div>
                                </Link>
                            </li>
                            {/* <li className='py-1.5 rounded'>
                                <Accordion label='Permission' className="bg-indigo-500 rounded text-white font-medium">
                                    <p>Content should be rendered</p>
                                </Accordion>
                            </li>                            */}
                        </ul>
                    </nav>
                </div>
            </aside>
        </>
    )
}
