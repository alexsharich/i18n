import React from 'react'
import { Login } from '../login/Login'
import { Routing } from '../routing/Routing'
import s from './Main.module.scss'

export const Main = () => {
  return (
    <div className={s.main}>
      <Routing />
    </div>
  )
}
