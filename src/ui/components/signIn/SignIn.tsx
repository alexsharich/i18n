import React from 'react'
import { useAppSelector } from '../../../hooks/hooks'
import { Login } from '../login/Login'
import { Registration } from '../registration/Registration'
import s from './SignIn.module.scss'

export const SignIn = () => {
  const isLoginModalActive = useAppSelector(
    (state) => state.modal.isLoginModalActive,
  )
  const isRegistrationModalActive = useAppSelector(
    (state) => state.modal.isRegistrationModalActive,
  )

  return (
    <div className={s.signInStyle}>
      {isLoginModalActive ? (
        <Login />
      ) : '' || isRegistrationModalActive ? (
        <Registration />
      ) : (
        ''
      )}
    </div>
  )
}
