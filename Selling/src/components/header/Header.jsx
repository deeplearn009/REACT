import React from 'react'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.container}>

          <header>
                
                <div className={styles.logo}>
                    <a href="#"><h1>Selling</h1></a>
                    <span id={styles.dot}></span>
                </div>

                <nav>

                    <div className={styles.nav_cont}>

                        <a href="#">Home</a>
                        <a href="#">Products</a>
                        <a href="#">About Us</a>
                        <a href="#">Special</a>
                        <a href="#">Testimonials</a>
                        <a href="#">Blog</a>
                        <a href="#">Contact</a>

                    </div>


                </nav>


          </header>









    </div>
  )
}

export default Header
