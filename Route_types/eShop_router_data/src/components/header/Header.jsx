import React from 'react'
import styles from './Header.module.scss'
import { useNavigate } from 'react-router'
const Header = () => {

    const navigation = useNavigate()


  return (
    <div className={styles.container}>
      <button onClick={() => navigation('/')}>HOME</button>
      <button onClick={() => navigation('/basket')}>BASKET</button>
      <button onClick={() => navigation('/favorites')}>FAVORITES</button>
    </div>
  )
}

export default Header
