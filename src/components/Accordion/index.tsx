import { useContext, useState } from 'react'
import { ChevronLeft } from 'lucide-react'
import { LucideIcon } from '../LucideIcon'
import { SidebarContext } from '@/context/SidebarContext'


type Accordion =  {
  children: React.ReactNode, 
  iconName?: string
  label: string, 
  className?: string
} 


export function Accordion({ children, label, iconName, className = '' }: Accordion) {
  const { isMobileScreen, isSidebarCollapsed } = useContext(SidebarContext)
  const [ isAccordionOpen, setAccordionState ] = useState(false)

  const handleToggle = () => {
    setAccordionState(!isAccordionOpen)
  }

  return (
    <>
      <div onClick={handleToggle} className={`flex flex-row justify-between items-center py-1.5 px-3 ${className}`}>
        <div className='flex items-center'>
          { iconName && 
            <LucideIcon name={iconName} className='h-6 w-6 p-1' />
          }
          <span className={`
            ${!isMobileScreen && isSidebarCollapsed
                ? 'opacity-0 invisible collapse-sidebar-text-2' 
                : 'opacity-100 visible collapse-sidebar-text ml-2'
            }`
          }>
            { label }
          </span>
        </div>
        <ChevronLeft className={`h-4 w-4 flex items-center transition ease-out duration-200 ${isAccordionOpen ? '-rotate-90' : 'rotate-0'}`} />  
      </div>

      <div className={`px-3 py-3 ${isAccordionOpen ? 'block' : 'hidden'}`}>
        { children }
      </div>
    </>
  )
}