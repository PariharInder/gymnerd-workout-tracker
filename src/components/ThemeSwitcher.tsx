'use client'
import { FC, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

interface ThemeSwitcherProps {

}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ }) => {

  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const switchThemes = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  if (!mounted) return null
  return <div className='rounded-full hover:scale-150'>
    {theme === 'light' ? (
      <Moon onClick={switchThemes} className=' text-zinc-600 transition-transform ease-in-out' />
    ) : (
      <Sun onClick={switchThemes} className=' text-amber-200 transition-transform ease-in-out' />
    )}
  </div>
}

export default ThemeSwitcher