import { Console } from 'console'
import React, { useState } from 'react'
import {
  setIsLoginModalThunk,
  setIsModalActiveThunk,
} from '../../../bll/ModalReducer'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { Modal } from '../modal/Modal'
import { SignIn } from '../signIn/SignIn'
import s from './Header.module.scss'
import { LangButton } from './languagesButtons/LangButtons'
import { Nav } from './navigation/nav/Nav'
import { ThemeButton } from './themeButton/ThemeButton'

export const Header = () => {
  const dispatch = useAppDispatch()
  const isActive = useAppSelector((state) => state.modal.isModalActive)

  const setIsActive = () => {
    dispatch(setIsModalActiveThunk(false))
  }
  const openSignInModal = () => {
    dispatch(setIsLoginModalThunk(true))
  }

  return (
    <div className={s.header}>
      <ThemeButton />
      <LangButton />
      <Nav openSignInModal={openSignInModal} />
      <Modal active={isActive} setIsActive={setIsActive}>
        <SignIn />
      </Modal>
    </div>
  )
}
