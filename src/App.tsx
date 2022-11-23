import React, { useEffect, useState } from 'react'
import './App.css'
import { Footer } from './ui/components/footer/Footer'
import { Header } from './ui/components/header/Header'
import { Login } from './ui/components/login/Login'
import { Main } from './ui/components/main/Main'
import { Modal } from './ui/components/modal/Modal'

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
