import React from 'react'
import styles from './Header.module.scss'
import { SlMagnifier } from "react-icons/sl";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <div className={styles.container}>
      
        <header>


            <div className={styles.left}>

                <div className={styles.logo}>

                    <span id={styles.first}>COLO</span>
                    <span id={styles.second}>SHOP</span>

                </div>

            </div>


            <div className={styles.center}>

                <div className={styles.nav}>

                    <a href="#">HOME</a>
                    <a href="#">SHOP</a>
                    <a href="#">PROMOTION</a>
                    <a href="#">PAGES</a>
                    <a href="#">BLOG</a>
                    <a href="#">CONTACT</a>

                </div>

            </div>


            <div className={styles.right}>

                <SlMagnifier />
                <FaUser />
                <FaShoppingCart />





            </div>



        </header>




    </div>
  )
}

export default Header
