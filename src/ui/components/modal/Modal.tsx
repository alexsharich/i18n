import React from 'react'
import { useDispatch } from 'react-redux'
import s from './Modal.module.scss'

type ModalPropsType = {
  active: boolean
  setIsActive: () => void
  children: React.ReactNode
}

export const Modal = ({ active, setIsActive, children }: ModalPropsType) => {
  const dispatch = useDispatch()
  return (
    <div
      className={active ? `${s.modal} ${s.active}` : `${s.modal}`}
      onClick={() => setIsActive()}
    >
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
