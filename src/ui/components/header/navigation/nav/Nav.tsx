import React from 'react'
import s from './Nav.module.scss'

export const Nav = () => {
  return (
    <ul className={s.nav}>
      <li>
        <a href="#"> Main</a>
      </li>
      <li>
        <a href="#"> Registration</a>
      </li>
      <li>
        <a href="#"> Login</a>
      </li>
    </ul>
  )
}
