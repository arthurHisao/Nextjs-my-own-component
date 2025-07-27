import { createContext, useState } from "react";
import { useIsMobile } from '@/hooks/use-mobile'

interface SidebarContext {
    isSidebarCollapsed: boolean
    isOffCanvasShowing: boolean
    isMobileScreen: boolean
    handleToggleSidebar: () => void
}

export const SidebarContext = createContext<SidebarContext>({
    isSidebarCollapsed: false,
    isOffCanvasShowing: false,
    isMobileScreen: false,
    handleToggleSidebar: () => {}
})


export const SidebarProvider  = ({ children }: { children: React.ReactNode }) => {
    const [ isSidebarCollapsed, setSidebarCollapsed ] = useState(false)
    const [ isOffCanvasShowing, setShowOffCanvas ] = useState(false)
    
    const isMobileScreen = useIsMobile()

    const handleToggleSidebar = () => {
        if (isMobileScreen) {
            return setShowOffCanvas(!isOffCanvasShowing)
        }
        setSidebarCollapsed(!isSidebarCollapsed)
    }

    return (
        <SidebarContext value={{ 
            isMobileScreen, 
            isSidebarCollapsed, 
            isOffCanvasShowing, 
            handleToggleSidebar
        }}>
            {children}
        </SidebarContext>
    )
}