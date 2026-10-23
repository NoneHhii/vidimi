// import React from 'react'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <Header />
      <HomePage />
      <Footer />
    </div>
  )
}

export default App
