import { useId } from "react"

interface Input {
  type?: string
  size?: string
  placeholder?: string
}

interface InputTypes {
  [key: string]: string
}

function Input({ size = 'sm', type = 'text', placeholder }: Input) {
  const componentId = useId()
  
  const InputTypes: InputTypes = {
    text: 'text',
    password: 'password',
    email: 'email',
    file: 'file'
  }

  const sizes = {
    xs: '0', 
    sm: '0.5', 
    md: '1', 
    lg: '1.5', 
    xl: '2'
  }

  return (
    <div className="relative">
      { InputTypes[type] === 'file' ? (
        <>
          {/* <label 
            htmlFor={componentId}
            className={`
              ${sizes ? `py-${sizes[size as keyof typeof sizes]}` : 'py-0.5'}
              peer border rounded-xs px-1 outline-0 focus:ring-2 ring-blue-500/40 transition-all focus:border-blue-500 placeholder:text-xs block
            `}
          >
            { placeholder }
          </label> */}
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
      ): (
        <input
          type={InputTypes[type]} 
          id={componentId} 
          className={`
            ${sizes ? `py-${sizes[size as keyof typeof sizes]}` : 'py-0.5'}
            peer border rounded-xs px-1 outline-0 focus:ring-2 ring-blue-500/40 transition-all focus:border-blue-500 placeholder:text-xs
          `}
          placeholder={placeholder}
        />
      )}
    </div>
  )
}

export default Input