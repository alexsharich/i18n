import React from 'react'
import s from './Header.module.scss'
import { Nav } from './navigation/nav/Nav'
import { ThemeButton } from './themeButton/ThemeButton'

export const Header = () => {
  return (
    <div className={s.header}>
      <ThemeButton />
      <Nav />
    </div>
  )
}
