import React from 'react'
import styles from './Navbar.module.scss'

function Navbar() {
  return (
    

        <div className={styles.navbar}>
              

              <div className={styles.center}>

                  <p><a href="#">Shop All</a></p>
                  <p><a href="#">Our Story</a></p>
                  <p><a href="#">Our Craft</a></p>
                  <p><a href="#">Gift Card</a></p>
                  <p><a href="#">Contact</a></p>

              </div>

            
          </div>
  )
} 

export default Navbar
