import React, { useEffect, useState } from 'react'
import './App.css'
import { Footer } from './ui/components/footer/Footer'
import { Header } from './ui/components/header/Header'
import { Main } from './ui/components/main/Main'

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
