import React, { useState } from 'react'
import { Login } from '../login/Login'
import { Modal } from '../modal/Modal'
import { Registration } from '../registration/Registration'
import s from './Header.module.scss'
import { LangButton } from './languagesButtons/LangButtons'
import { Nav } from './navigation/nav/Nav'
import { ThemeButton } from './themeButton/ThemeButton'

export const Header = () => {
  const [modalActive, setModalActive] = useState(false)
  const [registerModal, setRegisterModal] = useState(false)
  const [loginModal, setLoginModal] = useState(false)

  const setModalForLogin = (value: boolean) => {
    setLoginModal(value)
    setModalActive(value)
  }
  const setModalForRegistration = (value: boolean) => {
    setRegisterModal(value)
    setModalActive(value)
  }
  const setModal = (value: boolean) => {
    setModalActive(value)
    setRegisterModal(value)
    setModalActive(value)
  }

  return (
    <div className={s.header}>
      <ThemeButton />
      <LangButton />
      <Nav
        setModalForRegistration={setModalForRegistration}
        setModalForLogin={setModalForLogin}
      />
      <Modal active={modalActive} setActive={setModal}>
        {registerModal ? <Registration /> : '' || loginModal ? <Login /> : ''}
      </Modal>
    </div>
  )
}
