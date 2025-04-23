import React from 'react'
import { useTheme } from '../context/Context'

const Home = () => {

    const {theme, toggleTheme} = useTheme()

  return (
    <div style={{backgroundColor: theme === 'light' ? 'white' : 'black', width: '100%', height: '200px'}}>
      <button onClick={toggleTheme}>Change theme</button>
    </div>
  )
}

export default Home
