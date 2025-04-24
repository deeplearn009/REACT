import React from 'react'
import styles from './Header.module.scss'
import { Link } from 'react-router'

const Header = () => {
  return (
    <div className={styles.header}>

        <nav>
            <Link to="/">Home</Link>
            <Link to="/basket">Basket</Link>
        </nav>
     
    </div>

  )
}

export default Header
