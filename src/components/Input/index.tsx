'use client'

import { useId, useRef, useState } from "react"

interface Input {
  type?: string
  variant?: string
  size?: string
  placeholder?: string
}

interface InputTypes {
  [key: string]: string
}

interface Variant {
  [key: string]: string
}

function Input({ variant, size = 'sm', type = 'text', placeholder }: Input) {
  const componentId = useId()

  const inputRef = useRef<HTMLInputElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  
  const InputTypes: InputTypes = {
    text: 'text',
    password: 'password',
    email: 'email',
    file: 'file'
  }

  const styles: Variant = {
    underlined: 'underlined',
    filled: 'filled',
  }

  const sizes = {
    xs: '0', 
    sm: '0.5', 
    md: '1', 
    lg: '1.5', 
    xl: '2'
  }

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }

 
  if (InputTypes[type] === 'file') {
    return (
      <>
          <input
            type={InputTypes[type]} 
            id={componentId} 
            className={`
              ${sizes ? `py-${sizes[size as keyof typeof sizes]}` : 'py-0.5'}
              peer border rounded-xs px-1 outline-0 focus:ring-2 ring-blue-500/40 transition-all focus:border-blue-500 placeholder:text-xs block
              file:hidden
            `}          
          />
      </>
    )
  }

  const [hasValue, setHasValue] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasValue(e.target.value.length > 0)
  }

  if (variant) {
    return (
      <div className="relative">
        <input
          type={InputTypes[type]}
          id={componentId}
          ref={inputRef}
          className={`
            py-2.5
            peer border rounded-xs px-2.5 outline-0 focus:ring-2 ring-blue-500/40 transition-all placeholder:text-xs block placeholder-transparent
            dark:focus:bg-[#19222e] focus:border-0 focus:outline-none select-none
          `}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder={placeholder}
        />
        <label className={`
            absolute pointer-events-none transition-all select-none
            ${(isFocused || hasValue) ? '-top-1.5 text-xs px-1 dark:bg-[#19222e] bg-white ml-1.5' : 'top-0 px-3 py-3 text-sm z-10'}
        `}>
          {placeholder}
        </label>
      </div>
    )
  }

  return (
    <div className="relative">
      <input
        type={InputTypes[type]} 
        id={componentId} 
        className={`
          ${sizes ? `py-${sizes[size as keyof typeof sizes]}` : 'py-0.5'}
          peer border rounded-xs px-1 outline-0 focus:ring-2 ring-blue-500/40 transition-all focus:border-blue-500 placeholder:text-xs
        `}
        placeholder={placeholder}
      />
    </div>
  )
}

export default Input