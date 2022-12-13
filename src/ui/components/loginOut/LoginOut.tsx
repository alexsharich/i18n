import React from 'react'
import { useTranslation } from 'react-i18next'
import { ClearProfile } from '../../../bll/auth/AuthReduces'
import { setIsModalActiveThunk } from '../../../bll/ModalReducer'
import { useAppDispatch } from '../../../hooks/hooks'
import s from './LoginOut.module.scss'

export const LoginOut = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const logOut = () => {
    dispatch(setIsModalActiveThunk(false))
    dispatch(ClearProfile({}))
  }

  return (
    <div className={s.loginOut}>
      <h3>{t('sure')}</h3>
      <button onClick={logOut}>{t('loginOut')}</button>
    </div>
  )
}
