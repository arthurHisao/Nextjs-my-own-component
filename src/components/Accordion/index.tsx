import { useState } from 'react'
import { ChevronLeft } from 'lucide-react'


export function Accordion({ children, label, className = '' }: { children: React.ReactNode, label: string, className?: string}) {
  const [ isAccordionOpen, setAccordionState ] = useState(false)

  const handleToggle = () => {
    setAccordionState(!isAccordionOpen)
  }

  return (
    <div onClick={handleToggle}>
        <button className={`flex items-center px-3 w-full py-1.5 ${className}`}>
            <span className='flex-1 inline-flex items-center gap-2'>
                {/* <UserCheck className='h-4 w-4'/> */}
                { label }
            </span>
            <ChevronLeft className={`h-4 w-4 transition ease-out duration-150 ${isAccordionOpen ? '-rotate-90' : 'rotate-0'}`} />
        </button>

        <div className={`px-3 py-3 ${isAccordionOpen ? 'block' : 'hidden'}`}>
            { children }
        </div>
    </div>
  )
}