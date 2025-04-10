import React from 'react'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.container}>

        <header>

            <div className={styles.left}>
                <input type="text" placeholder='Search...' />
            </div>

            <div className={styles.center}>
                <h1>adalene.</h1>
            </div>

            <div className={styles.right}>

                <p><a href="#">Log In</a></p>
                <p><a href="#">Cart(0)</a></p>

            </div>





        </header>

    </div>
  )
}

export default Header
