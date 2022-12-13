import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../../../hooks/hooks'
import s from './Nav.module.scss'

type NavPropsType = {
  openSignInModal: () => void
  openSignOutModal: () => void
}

export const Nav = ({ openSignInModal, openSignOutModal }: NavPropsType) => {
  const { t } = useTranslation()
  const initialized = useAppSelector((state) => state.auth.initialized)
  const dispatch = useAppDispatch()

  return (
    <div>
      <ul className={s.nav}>
        <li>
          <Link to="/main">{t('main')}</Link>
        </li>
        <li>
          <Link to="/profile">{t('profile')}</Link>
        </li>
        {!initialized ? (
          <li>
            <a href="#" onClick={() => openSignInModal()}>
              {t('signIn')}
            </a>
          </li>
        ) : (
          <li>
            <a href="#" onClick={() => openSignOutModal()}>
              {t('signOut')}
            </a>
          </li>
        )}
      </ul>
    </div>
  )
}
