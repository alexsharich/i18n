import React from 'react'
import { useTranslation } from 'react-i18next'
import s from './Nav.module.scss'

type NavPropsType = {
  setModalForLogin: (value: boolean) => void
  setModalForRegistration: (value: boolean) => void
}

export const Nav = ({
  setModalForLogin,
  setModalForRegistration,
}: NavPropsType) => {
  const { t } = useTranslation()

  return (
    <ul className={s.nav}>
      <li>
        <a href="#">{t('main')}</a>
      </li>
      <li>
        <a href="#" onClick={() => setModalForRegistration(true)}>
          {' '}
          {t('registration')}
        </a>
      </li>
      <li>
        <a href="#" onClick={() => setModalForLogin(true)}>
          {t('login')}
        </a>
      </li>
    </ul>
  )
}
