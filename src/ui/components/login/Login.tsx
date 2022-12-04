import { Form, Formik } from 'formik'
import React from 'react'
import { setRegistrationModalThunk } from '../../../bll/ModalReducer'
import { useAppDispatch } from '../../../hooks/hooks'
import s from './Login.module.scss'

export const Login = () => {
  const dispatch = useAppDispatch()
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
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
          <h3>LOGIN</h3>
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
            Submit
          </button>
          <a
            href="#"
            onClick={() => {
              dispatch(setRegistrationModalThunk(true))
            }}
          >
            REGISTRATION
          </a>
        </form>
      )}
    </Formik>
  )
}
