"use client"

import Link from 'next/link'
// import { Accordion } from '../Accordion'
import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '@/context/ThemeContext'
import { SidebarContext } from '@/context/SidebarContext'
import { LucideIcon } from '@/components/LucideIcon'
import ToggleSwitch from '../ToggleSwitch'

export default function Sidebar() {
    const { theme, toggleTheme } = useContext(ThemeContext) 
    const { isMobileScreen, isSidebarCollapsed, isOffCanvasShowing, handleToggleSidebar } = useContext(SidebarContext)
    const [ isDarkTheme, setDarkTheme ] = useState(false)  
    
    // Initials letters util for Avatar
    const getInitials = (text: string) => {
        const initial = text.split(' ').map(word => word[0])
        const getInitialLetters = initial[0] + initial[initial.length -1]
        return getInitialLetters.toUpperCase()
    }
        
    useEffect(() => {
        setDarkTheme(theme === 'dark')
    }, [theme])

    const sidebarLinks = [
        {
            name: '',
            label: 'Dashboard',
            icon: 'LayoutDashboard',
            url: '#'
        }, 
        {
            name: '',
            label: 'Product',
            icon: 'CircleSmall',
            url: '#'
        },
        {
            name: '',
            label: 'Users',
            icon: 'CircleSmall',
            url: '#'
        },
    ]
        
    return (
        <>
            <div 
                className={`
                    flex flex-none lg:ml-0 dark:bg-[#0a0a0a] bg-white 
                    ${!isMobileScreen && isSidebarCollapsed ? 'ml-[-155px] lg:w-16 collapse-sidebar' : 'ml-[-165px]  lg:flex-2 lg:w-64 collapse-sidebar-2'}
                `}
                style={ isMobileScreen 
                    ? ( isOffCanvasShowing 
                        ? { marginLeft: 0, width: '230px', position: 'fixed', left: 0, top: 0, transition: '.3s ease', zIndex: 50 }
                        : { marginLeft: '-230px', width: '230px', position: 'fixed', left: 0, top: 0, transition: 'margin-left .3s ease-in-out', zIndex: 50 }
                    ) : {}
                }
            >
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
                                        ${!isMobileScreen && isSidebarCollapsed 
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
                        
                        <nav className='h-auto lg:h-full w-full py-4 px-2.5'>
                            <ul className='inline-flex flex-col justify-start w-full h-full divide-y'>
                                {sidebarLinks.map((link) => ( 
                                    <li key={link.label} className='py-1.5 rounded'>
                                        <Link href={link.url} className='flex items-center px-3'>
                                            <div className="inline-flex items-center">
                                                <LucideIcon name={link.icon} className='h-4 w-4' />
                                                <span className={`
                                                    ${!isMobileScreen && isSidebarCollapsed 
                                                        ? 'opacity-0 invisible collapse-sidebar-text-2' 
                                                        : 'opacity-100 visible collapse-sidebar-text ml-2'
                                                    }
                                                `}>
                                                    {link.label}
                                                </span>    
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        {isMobileScreen && (
                            <footer className='border-t w-full py-4 px-2.5 absolute bottom-0'>
                                <div className='inline-flex gap-2 w-full'>
                                    <label>Change Mode: </label>
                                    <ToggleSwitch
                                        parentEvent={toggleTheme}
                                        isActive={isDarkTheme}
                                    >
                                        {isDarkTheme ? (
                                            <LucideIcon name="Moon" className='absolute top-0 left-0 right-0 p-[4px] w-[22px] h-[22px] rounded-full bg-gray-300' />
                                            ) : (
                                            <LucideIcon name="Sun" className='absolute top-0 left-0 right-0 p-[4px] w-[22px] h-[22px] rounded-full'/>
                                        )}
                                    </ToggleSwitch>
                                </div>
                            </footer>
                        )}
                        {/* <li className='py-1.5 rounded'>
                                <Accordion label='Permission' className="bg-indigo-500 rounded text-white font-medium">
                                    <p>Content should be rendered</p>
                                </Accordion>
                            </li> */}
                        {/* </ul> */}
                    </div>
                </aside>
            </div>

            {isMobileScreen && isOffCanvasShowing &&
                <div onClick={handleToggleSidebar} className="fixed inset-0 bg-black/70 z-40"></div>
            }
        </>
    )
}
