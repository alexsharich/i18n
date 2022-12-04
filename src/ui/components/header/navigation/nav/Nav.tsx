import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { setLoaderThunk } from '../../../../../bll/LoaderReducer'
import { useAppDispatch } from '../../../../../hooks/hooks'
import s from './Nav.module.scss'

type NavPropsType = {
  openSignInModal: () => void
}

export const Nav = ({ openSignInModal }: NavPropsType) => {
  const { t } = useTranslation()
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
        <li>
          <a href="#" onClick={() => openSignInModal()}>
            {t('signIn')}
          </a>
        </li>
      </ul>
      <button onClick={() => dispatch(setLoaderThunk(true))}>loader</button>
    </div>
  )
}
