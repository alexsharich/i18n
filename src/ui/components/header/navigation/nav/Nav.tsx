import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import s from './Nav.module.scss'

type NavPropsType = {
  openLoginModal: () => void
  openRegistrationModal: () => void
}

export const Nav = ({
  openLoginModal,
  openRegistrationModal,
}: NavPropsType) => {
  const { t } = useTranslation()
  //const dispatch = useDispatch()

  return (
    <ul className={s.nav}>
      <li>
        <Link to="/main">{t('main')}</Link>
      </li>
      <li>
        <Link to="/profile">{t('profile')}</Link>
      </li>
      <li>
        <a href="#" onClick={() => openRegistrationModal()}>
          {' '}
          {t('registration')}
        </a>
      </li>
      <li>
        <a href="#" onClick={() => openLoginModal()}>
          {t('login')}
        </a>
      </li>
    </ul>
  )
}
