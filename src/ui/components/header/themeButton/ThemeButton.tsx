import React, { useEffect, useState } from 'react'
import { BsSun } from 'react-icons/bs'
import { BsMoonStars } from 'react-icons/bs'

export const ThemeButton = () => {
  const [theme, setTheme] = useState('day')

  const toggleTheme = () => {
    setTheme(theme === 'day' ? 'night' : 'day')
  }
  useEffect(() => {
    const backgroundColor = `var(--background-color-${theme})`
    const fontColor = `var(--color-text-${theme})`
    const colorMain = `var(--backgroundMain-color-${theme})`

    document.body.style.setProperty('--background-color', backgroundColor)
    document.body.style.setProperty('--color', fontColor)
    document.body.style.setProperty('--backgroundMain-color', colorMain)
  }, [theme])

  return (
    <>
      <div onClick={toggleTheme}>
        {theme === 'day' ? <BsSun /> : <BsMoonStars />}
      </div>
    </>
  )
}
