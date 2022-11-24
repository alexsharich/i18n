import { Console } from 'console'
import React, { useState } from 'react'
import {
  setRegistrationModalActiveThunk,
  setIsModalActiveThunk,
  setLoginModalThunk,
} from '../../../bll/ModalReducer'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { Login } from '../login/Login'
import { Modal } from '../modal/Modal'
import { Registration } from '../registration/Registration'
import s from './Header.module.scss'
import { LangButton } from './languagesButtons/LangButtons'
import { Nav } from './navigation/nav/Nav'
import { ThemeButton } from './themeButton/ThemeButton'

export const Header = () => {
  const dispatch = useAppDispatch()

  const isActive = useAppSelector((state) => state.modal.isModalActive)
  const loginModalIsActive = useAppSelector(
    (state) => state.modal.loginChildModal,
  )
  const registrationModalIsActive = useAppSelector(
    (state) => state.modal.registrationChildModal,
  )
  const setIsActive = () => {
    dispatch(setIsModalActiveThunk(false))
    // dispatch(setIsModalActiveThunkAction(false))
  }
  const openLoginModal = () => {
    dispatch(setLoginModalThunk(true))
    // dispatch(setLoginModalThunkAction(true))
  }
  const openRegistrationModal = () => {
    dispatch(setRegistrationModalActiveThunk(true))
    // dispatch(setRegistrationModalThunkAction(true))
  }

  return (
    <div className={s.header}>
      <ThemeButton />
      <LangButton />
      <Nav
        openLoginModal={openLoginModal}
        openRegistrationModal={openRegistrationModal}
      />
      <Modal active={isActive} setIsActive={setIsActive}>
        {registrationModalIsActive ? (
          <Registration />
        ) : '' || loginModalIsActive ? (
          <Login />
        ) : (
          ''
        )}
      </Modal>
    </div>
  )
}
