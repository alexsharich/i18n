import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { NotFound404 } from '../main/notFound404/NotFound404'
import { Profile } from '../profile/Profile'

const PATH = {
  MAIN: '/main',
  NOT_FOUND: '/404',
  UNKNOWN_PATH: '*',
  PROFILE_PAGE: '/profile',
}

export const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path={PATH.MAIN} element={<h3>MAIN</h3>} />
        <Route path={PATH.PROFILE_PAGE} element={<Profile />} />
        <Route path={PATH.NOT_FOUND} element={<NotFound404 />} />
        <Route path={PATH.UNKNOWN_PATH} element={<Navigate to="/404" />} />
      </Routes>
    </div>
  )
}
