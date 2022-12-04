import React from 'react'
import { useAppSelector } from '../../../hooks/hooks'
import { Loader } from '../loader/Loader'
import s from './Modal.module.scss'

type ModalPropsType = {
  active: boolean
  setIsActive: () => void
  children: React.ReactNode
}

export const Modal = ({ active, setIsActive, children }: ModalPropsType) => {
  const isLoaderStatus = useAppSelector((state) => state.loader.isLoader)

  return (
    <div
      className={active ? `${s.modal} ${s.active}` : `${s.modal}`}
      onClick={() => setIsActive()}
    >
      {isLoaderStatus ? <Loader /> : ''}
      <div
        className={
          active ? `${s.modalContent} ${s.active}` : `${s.modalContent}`
        }
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}
