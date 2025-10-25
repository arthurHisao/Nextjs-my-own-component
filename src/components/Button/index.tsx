import { LucideIcon } from "../LucideIcon"

interface Properties {
    size?: string
    color?: string
    label: string
    icon?: string
    iconRight?: boolean
    loading?: boolean
}

export default function Button({ size, color, label, icon, iconRight, loading }: Properties) {    
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
        <button disabled={loading} className={`
            ${loading ? 'cursor-not-allowed opacity-50' : ' cursor-pointer'}
            ${sizes ? `py-${sizes[size as keyof typeof size]}` : 'py-0.5'}
            ${colors[color as keyof typeof color] ?? 'bg-gray-400 hover:bg-gray-500/95 hover:border-gray-500 border border-gray-400 focus:border-gray-500 focus:bg-gray-500/95 ring-gray-500/50 shadow-gray-500/90'} 
            rounded-[3px] px-2.5 ease-in-out duration-300 focus:ring-[.16rem] focus:shadow-inset
        `}>
            <div className={`flex items-center gap-1 flex-wrap break-all max-w-32 ${iconRight ? 'flex-row-reverse' : 'flex-row'}`}>
                {icon ? (
                    <>
                        {loading ? ( 
                            <svg className="mr-3 size-5 animate-spin text-white" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        ) : (
                            <LucideIcon name={icon} />
                        )}
                        <span className="text-sm font-light tracking-tight text-white">
                            {label}
                        </span>
                    </>
                ) : (
                    <>
                        {loading && 
                            <svg className="mr-3 size-5 animate-spin text-white" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        }
                        <span className="text-sm font-light tracking-tight text-white">{label}</span>
                    </>
                )}
            </div>
        </button>
    )
}