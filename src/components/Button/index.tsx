interface Properties {
    size?: string
    color?: string
    label: string
}

export default function Button({ size, color, label }: Properties) {    
    const sizes = {
        'xs': '0', 
        'sm': '0.5', 
        'md': '1', 
        'lg': '1.5', 
        'xl': '2'
    }

    const colors = {
        primary: 'bg-blue-500 hover:bg-blue-600/95 hover:border-blue-600 border border-blue-500 focus:border-blue-600 focus:bg-blue-600/95 ring-blue-500/50 shadow-blue-500/90',
        positive: 'bg-green-600 hover:bg-green-700/95 hover:border-green-700 border border-green-600 focus:border-green-600 focus:bg-green-600/95 ring-green-700/50 shadow-green-600/90',
        negative: 'bg-red-500 hover:bg-red-600 hover:border-red-500 border border-red-500 focus:border-red-500 focus:bg-red-600 ring-red-500/50 shadow-red-500/90',
        warning: 'bg-yellow-500 hover:bg-yellow-600/95 hover:border-yellow-600 border border-yellow-500 focus:bg-yellow-600/95 focus:border-yellow-600/95 ring-yellow-600/50 shadow-yellow-600/90',
        info: ''
    }
    
    return (
        <button className={`
            ${sizes ? `py-${sizes[size as keyof typeof size]}` : 'py-0.5'}
            ${colors[color as keyof typeof color] ?? 'bg-gray-400 hover:bg-gray-500/95 hover:border-gray-500 border border-gray-400 focus:border-gray-500 focus:bg-gray-500/95 ring-gray-500/50 shadow-gray-500/90'} 
            cursor-pointer rounded-[3px] px-2.5 ease-in-out duration-300 focus:ring-[.16rem] focus:shadow-inset
        `}>
            <span className="text-sm font-light tracking-tight text-white">{label}</span>
        </button>
    )
}