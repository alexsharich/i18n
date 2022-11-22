import React from 'react'
import { useTranslation } from 'react-i18next'
import s from './Nav.module.scss'

export const Nav = () => {
  const { t } = useTranslation()

  return (
    <ul className={s.nav}>
      <li>
        <a href="#">{t('main')}</a>
      </li>
      <li>
        <a href="#"> {t('registration')}</a>
      </li>
      <li>
        <a href="#">{t('login')}</a>
      </li>
    </ul>
  )
}
