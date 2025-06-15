import Link from 'next/link'
import React from 'react'
import Header from "@/components/Header"
import { ChevronLeft, CircleSmall, LayoutDashboard, UserCheck } from 'lucide-react'

export default function Sidebar({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className='flex flex-2'>
                <aside className='w-full h-screen sticky top-0'>
                    <div className='border-r h-full'>
                        <div className='h-16 w-full flex items-center justify-center border-b'>
                            <Link href="#" className='text-2xl'>Your Logo</Link>
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
                                <li className='py-1.5 bg-indigo-500 rounded text-white font-medium'>
                                    <Link href="#" className='flex items-center px-3'>
                                        <span className='flex-1 inline-flex items-center gap-2'>
                                            <UserCheck className='h-4 w-4'/>
                                            Permissions
                                        </span>
                                        <ChevronLeft className='h-4 w-4' />
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </aside>
            </div>

            <div className='flex flex-10'>
                <main className='w-full'>
                    <Header />
                    { children }
                </main>
            </div>
        </>
    )
}
