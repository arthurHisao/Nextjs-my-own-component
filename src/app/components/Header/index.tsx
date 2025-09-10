"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
} from '@/components/ui/navigation-menu'

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useSidebar } from "@/components/ui/sidebar"
import Link from "next/link"

export default function Header() {
  const { toggleSidebar } = useSidebar()

  return (
      <header className="bg-slate-200 py-1 lg:pl-64 top-0 fixed w-full">
        <NavigationMenu className='relative top-0 w-full lg:mx-4'>
            <NavigationMenuList>
              {/* === Hamburguer Menu === */}
              <NavigationMenuItem>
                <Button 
                  variant="ghost"
                  type="button" 
                  onClick={toggleSidebar}
                  className='p-1'
                >
                  <Menu />
                </Button>
              </NavigationMenuItem>
                
              <NavigationMenuItem>
                <Link href="/">
                  Your Logo
                </Link>
              </NavigationMenuItem>                               
            </NavigationMenuList>
        </NavigationMenu>
      </header>

  // <header className="bg-slate-200 py-1 lg:pl-64">
    //   <div className="flex items-center justify-between mx-auto lg:px-4">
    //     <Button variant="ghost" onClick={toggleSidebar} size="icon">
    //       <Menu/>
    //     </Button>

    //     <div className="inline-flex items-center gap-2">
    //       <DropdownMenu>
    //         <span>User name</span>
    //         <DropdownMenuTrigger>
    //           {/* User Avatar */}
    //           <Avatar>
    //             <AvatarImage src="https://github.com/shadcn.png" />
    //             <AvatarFallback>CN</AvatarFallback>
    //           </Avatar>

    //           {/* Dropdown Content */}
    //           <DropdownMenuContent>
    //              <DropdownMenuLabel>My Account</DropdownMenuLabel>
    //              <DropdownMenuItem>Profile</DropdownMenuItem>
    //           </DropdownMenuContent>

    //         </DropdownMenuTrigger>
    //       </DropdownMenu>
    //     </div>
    //   </div>
    // </header>
  )
}
