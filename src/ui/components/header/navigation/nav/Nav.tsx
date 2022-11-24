import React from 'react'
import { useTranslation } from 'react-i18next'
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
        <a href="#">{t('main')}</a>
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
