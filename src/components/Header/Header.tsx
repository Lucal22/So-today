import { useTheme } from 'next-themes'
import React from 'react'

export default function Header() {
  //const { theme, setTheme } = useTheme()
  return (
    <div>
      <div>header</div>
      {/* <button
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Toggle
      </button> */}
    </div>
  )
}
