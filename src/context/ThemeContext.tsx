import { createContext, useEffect, useState } from 'react'

type ThemeContextType = {
    theme: string | false | undefined;
    toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
    theme: '',
    toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {

    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            if (!localStorage.getItem('theme') && window.matchMedia("(prefers-color-scheme: dark)").matches) return 'dark'
            return localStorage.getItem('theme') || 'light'
        }
    })

    const toggleTheme = () => {
        setTheme((previousTheme) => (previousTheme === 'light' ? 'dark' : 'light'))
    }
    
    useEffect(() => {
        localStorage.setItem('theme', theme || '')
        document.documentElement.className = theme === 'dark' ? 'dark' : ''
    }, [theme])

    return (
        <ThemeContext value={{ theme, toggleTheme}}>
            { children }
        </ThemeContext>
    )
}