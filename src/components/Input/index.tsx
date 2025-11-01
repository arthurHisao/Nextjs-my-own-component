import { useId } from "react"

interface Input {
  type?: string
  placeholder?: string
}

function Input({ type, placeholder }: Input) {
  const componentId = useId()
  return (
    <div className="relative">
      <input type={type} id={componentId} className="peer border rounded-xs px-1 py-0.5 outline-0 focus:ring-2 ring-blue-500/40 transition-all focus:border-blue-500" required/>
      <label htmlFor={componentId} className="absolute top-0 left-0 font-extralight text-[12px] p-1.5 w-full h-full select-none peer-valid:hidden peer-placeholder-shown:hidden">{placeholder}</label>
    </div>
  )
}

export default Input