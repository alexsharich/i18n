import React, { useEffect } from 'react'
import './App.css'
import { Footer } from './ui/components/footer/Footer'
import { Header } from './ui/components/header/Header'
import { Main } from './ui/components/main/Main'

function App() {
  useEffect(() => { })

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
