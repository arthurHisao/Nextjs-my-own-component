import React, { useEffect, useState } from 'react'

interface Props {
    parentEvent: () => void
    isActive?: boolean
    children: React.ReactNode
}

export default function ToggleSwitch({ children, parentEvent, isActive }: Props) {
    const [ isToggleOn, setToggleOn ] = useState(false)

    useEffect(() =>{
        if (typeof isActive === 'boolean') {
            setToggleOn(isActive)
        }
    }, [isActive])
 
    return (
        <>
            <label
                htmlFor="change-mode"
                className="block rounded-full w-12 h-6 relative cursor-pointer border border-gray-300 dark:border-white/15 bg-gray-200 text-gray-700 dark:bg-slate-700 dark:text-white"
            >
                <span
                    className={`
                        block relative w-[22px] h-[22px] top-0 bottom-0 left-0 right-0 rounded-full ease duration-300 cursor-pointer :dark:bg-slate-900 bg-white shadow
                        ${isToggleOn  ? 'translate-x-[24px]' : 'translate-x-0'}
                    `}
                >
                    { children }
                </span>

                <input
                    type="checkbox"
                    id="change-mode"
                    className="opacity-0 w-0 h-0"
                    onClick={parentEvent}
                />
            </label>
        </>
    )
}
