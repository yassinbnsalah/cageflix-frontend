'use client'

import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const root = window.document.documentElement
    const initialTheme = localStorage.getItem('theme') || 'light'
    setTheme(initialTheme)
    root.classList.toggle('dark', initialTheme === 'dark')
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    const root = window.document.documentElement
    root.classList.toggle('dark', newTheme === 'dark')
    localStorage.setItem('theme', newTheme)
    setTheme(newTheme)
  }

  return (
    <button onClick={toggleTheme} className="px-4 py-2  rounded font-netflix">
      <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} className="text-xl" />
    </button>
  )
}
