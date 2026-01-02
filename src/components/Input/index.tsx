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
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [hasValue, setHasValue] = useState(false)
  
  const InputTypes: InputTypes = {
    text: 'text',
    password: 'password',
    email: 'email',
    file: 'file',
    textarea: 'textarea'
  }

  const styles: Variant = {
    underlined: 'underlined',
    filled: 'filled',
  }

  const sizes = {
    // sm: '0.5', 
    // md: '1', 
    // lg: '1.5', 
    // xl: '2'

    sm: '8', 
    md: '9', 
    lg: '10',
    xl: '11' 
  }

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setHasValue(e.target.value.length > 0)
  }

  const heightValue = sizes[size as keyof typeof sizes] ? `calc(0.3 * ${sizes[size as keyof typeof sizes]}rem)` : 'calc(2.375rem);'

  // Styled Inputs with variants
  if (variant) {
    return (
      <div className="relative">
        {InputTypes[type] === 'textarea' ? (
          <>
            <textarea
              id={componentId}
              ref={textareaRef}
              className={`
                peer border rounded-xs px-2.5 outline-0 focus:ring-2 ring-blue-500/40 transition-all placeholder:text-xs block placeholder-transparent min-h-10 py-2.5
                dark:focus:bg-[#19222e] focus:border-0 focus:outline-none select-none
              `}
              style={{ height: `calc(0.5 * ${sizes[size as keyof typeof sizes]}rem)`}}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder={placeholder}
            />
            <label 
              className={`
                absolute pointer-events-none transition-all select-none
                ${(isFocused || hasValue) ? '-top-1.5 text-xs px-1 dark:bg-[#19222e] bg-white ml-1.5 ' : 'top-0 text-sm z-10 flex items-center h-full px-2'}
              `}
            >
              {placeholder}
            </label>
          </>
        ) : (
          <>
            <input
              type={InputTypes[type]}
              id={componentId}
              ref={inputRef}
              className={`
                peer border rounded-xs px-2.5 outline-0 focus:ring-2 ring-blue-500/40 transition-all placeholder:text-xs block placeholder-transparent
                dark:focus:bg-[#19222e] focus:border-0 focus:outline-none select-none
              `}
              style={{ height: heightValue }}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder={placeholder}
            />
            <label 
              className={`
                absolute pointer-events-none transition-all select-none
                ${(isFocused || hasValue) ? '-top-1.5 text-xs px-1 dark:bg-[#19222e] bg-white ml-1.5 ' : 'top-0 text-sm z-10 flex items-center h-full px-2'}
              `}
            >
              {placeholder}
            </label>
          </>
        )}
      </div>
    )
  }

  // Default Input Style
  if (!variant && InputTypes[type] === 'file') {
    return (
      <>
          <input
            type={InputTypes[type]} 
            id={componentId} 
            className={`
              ${sizes ? `h-${sizes[size as keyof typeof sizes]}` : 'py-0.5'}
              peer border rounded-xs px-1 outline-0 focus:ring-2 ring-blue-500/40 transition-all focus:border-blue-500 placeholder:text-xs block
              file:hidden
            `}          
          />
      </>
    )
  }
  
  if (InputTypes[type] === 'textarea') {
    return (
      <>
          <textarea
            id={componentId}
            ref={textareaRef}
            placeholder={placeholder}
            className={`
              ${sizes ? `h-${sizes[size as keyof typeof sizes]}` : 'py-0.5'}
              peer border rounded-xs px-1 outline-0 focus:ring-2 ring-blue-500/40 transition-all focus:border-blue-500 placeholder:text-xs block
              file:hidden
            `}          
          />
      </>
    )
  }

  return (
    <div className="relative">
      <input
        type={InputTypes[type]} 
        id={componentId} 
        className={`
          ${sizes ? `h-${sizes[size as keyof typeof sizes]}` : 'py-0.5'}
          peer border rounded-xs px-1 outline-0 focus:ring-2 ring-blue-500/40 transition-all focus:border-blue-500 placeholder:text-xs
        `}
        placeholder={placeholder}
      />
    </div>
  )
}

export default Input