import { Formik } from 'formik'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { authLoginThunk } from '../../../bll/auth/AuthReduces'
import { setRegistrationModalThunk } from '../../../bll/ModalReducer'
import { useAppDispatch } from '../../../hooks/hooks'
import s from './Login.module.scss'

export const Login = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values) => {
        dispatch(authLoginThunk(values))
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit} className={s.form}>
          <h3>{t('login')}</h3>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            placeholder="email"
          />
          {errors.email && touched.email && errors.email}
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            placeholder="password"
          />
          <button type="submit" disabled={isSubmitting}>
            {t('submit')}
          </button>
          <a
            href="#"
            onClick={() => {
              dispatch(setRegistrationModalThunk(true))
            }}
          >
            {t('registration')}
          </a>
        </form>
      )}
    </Formik>
  )
}
