import React from 'react'
import s from './Header.module.scss'
import { LangButton } from './languagesButtons/LangButtons'
import { Nav } from './navigation/nav/Nav'
import { ThemeButton } from './themeButton/ThemeButton'

export const Header = () => {
  return (
    <div className={s.header}>
      <ThemeButton />
      <LangButton />
      <Nav />
    </div>
  )
}
