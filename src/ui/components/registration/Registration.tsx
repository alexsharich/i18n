import { Formik } from 'formik'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { setIsLoginModalThunk } from '../../../bll/ModalReducer'
import { useAppDispatch } from '../../../hooks/hooks'
import s from './Registration.module.scss'

export const Registration = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  return (
    <Formik
      initialValues={{ email: '', password: '', fullName: '' }}
      onSubmit={(values) => {
        alert(JSON.stringify(values))
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
          <h3>{t('registration')}</h3>
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
          <input
            type="text"
            name="fullName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.fullName}
            placeholder="fullName"
          />

          <button type="submit" disabled={isSubmitting}>
            {t('submit')}
          </button>
          <a href="#" onClick={() => dispatch(setIsLoginModalThunk(true))}>
            {t('login')}
          </a>
        </form>
      )}
    </Formik>
  )
}
