import React from 'react'
import { icons } from 'lucide-react'

interface IconProps {
    name: string //keyof typeof icons
    size?: number
    color?: string
    className?: string
}

export const LucideIcon: React.FC<IconProps> = ({ name, ...props }) => {
    const LucideIcon = icons[name as keyof typeof icons]

    if (!LucideIcon) {
        console.warn(`The icon named: ${name} not found`)
        return 
    }

    return (
        <LucideIcon {...props} />
    )
}
