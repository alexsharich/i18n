import React from 'react'
import { useTranslation } from 'react-i18next'
import s from './LangButton.module.scss'

export const LangButton = () => {
  const [t, i18n] = useTranslation()
  const currentLanguage = i18n.language

  const changeLanguage = (language: 'en' | 'ru') => {
    i18n.changeLanguage(language)
  }

  return (
    <div className={s.languagesBlock}>
      {currentLanguage === 'ru' ? (
        <button onClick={() => changeLanguage('en')}>EN</button>
      ) : (
        <button onClick={() => changeLanguage('ru')}>RU</button>
      )}
    </div>
  )
}
