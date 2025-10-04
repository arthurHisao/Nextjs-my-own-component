interface Properties {
    size?: string
    color?: string
}

export default function Button({ size, color }: Properties) {    
    const sizes = {
        'xs': '0', 
        'sm': '0.5', 
        'md': '1', 
        'lg': '1.5', 
        'xl': '2'
    }
    
    return (
        <button className={`
            ${sizes ? `py-${sizes[size as keyof typeof size]}` : 'py-0.5'}
            bg-blue-500 rounded-[3px] px-2.5 ease-in-out duration-300 hover:bg-blue-600/95 cursor-pointer 
            border border-blue-500 focus:bg-blue-600/95 focus:ring-[.16rem] ring-blue-500/50 focus:shadow-inset shadow-blue-500/90 
        `}>
            <span className="text-sm font-light tracking-tight text-white">Primary</span>
        </button>
    )
}