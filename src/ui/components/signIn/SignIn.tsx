import React from 'react'
import { useAppSelector } from '../../../hooks/hooks'
import { Login } from '../login/Login'
import { LoginOut } from '../loginOut/LoginOut'
import { Registration } from '../registration/Registration'
import s from './SignIn.module.scss'

export const SignIn = () => {
  const isLoginModalActive = useAppSelector(
    (state) => state.modal.isLoginModalActive,
  )
  const isRegistrationModalActive = useAppSelector(
    (state) => state.modal.isRegistrationModalActive,
  )
  const isLoginOutModalActive = useAppSelector(
    (state) => state.modal.isLoginOutModalActive,
  )

  return (
    <div className={s.signInStyle}>
      {isLoginModalActive ? (
        <Login />
      ) : '' || isRegistrationModalActive ? (
        <Registration />
      ) : '' || isLoginOutModalActive ? (
        <LoginOut />
      ) : (
        ''
      )}
    </div>
  )
}
