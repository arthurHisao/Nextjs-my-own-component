import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function detectMode() {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  document.documentElement.classList.toggle("dark",
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
  )
  localStorage.theme = "light";
  localStorage.theme = "dark";

  // Whenever the user explicitly chooses to respect the OS preference
  // localStorage.removeItem("theme");
}





{/* <label
  htmlFor="change-mode"
  className="block rounded-full w-12 h-6 relative cursor-pointer border border-gray-300 dark:border-white/15 bg-gray-200 text-gray-700 dark:bg-slate-700 dark:text-white"
>
  <span
    className={`
      block relative w-[22px] h-[22px] top-0 bottom-0 left-0 right-0 rounded-full ease duration-300 cursor-pointer bg-white shadow
      ${isDarkTheme ? 'translate-x-[24px] bg-slate-900' : 'translate-x-0'}
    `}
  >
    {isDarkTheme ? (
      <Moon className='absolute top-0 left-0 right-0 p-[4px] w-[22px] h-[22px] rounded-full' />
    ) : (
      <Sun className='absolute top-0 left-0 right-0 p-[4px] w-[22px] h-[22px] rounded-full'/>
    )}
  </span>
  <input
    type="checkbox"
    id="change-mode"
    className="opacity-0 w-0 h-0"
    onClick={toggleTheme}
  />
</label> */}