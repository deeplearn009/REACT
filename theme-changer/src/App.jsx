import React from 'react'
import Home from './pages/Home'
import { ThemeProvider } from './context/Context'

const App = () => {
  return (
    <ThemeProvider>
      <Home/>
    </ThemeProvider>
  )
}

export default App
