import React from 'react'
import styles from './Header.module.scss'
import { AiFillLike } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router';
import { SlMagnifier } from "react-icons/sl";
import { FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <div className={styles.container}>
      
      <header>

        <div className={styles.left}>
          <div className={styles.logo}>
            <Link to='/'><img src="https://vectorseek.com/wp-content/uploads/2023/07/Temu-Logo-Vector.svg-.png" alt="" /></Link>
          </div>

          <div className={styles.categories}>
            <a href="#"><AiFillLike />Best-Selling Items</a>
            <a href="#">5-Star Rated</a>
            <a href="#">New In</a>
            <a href="#">Categories</a>
          </div>

        </div>

        <div className={styles.inp}>
          <input type="text" placeholder='Search here...' />
          <SlMagnifier id={styles.icon}/>
        </div>

        <div className={styles.right}>
          <div className={styles.account}>
            <div className={styles.user}>
              <FaUser/>
            </div>
            <div className={styles.reg}>
              <span>Sign in/Register</span>
              <span>Orders & Account</span>
            </div>
          </div>

          <div className={styles.support}>
            <span>Support</span>
          </div>

          <div className={styles.cart}>
            <Link to='/basket'><FaShoppingCart id={styles.icon}/></Link>
          </div>

        </div>

      </header>

    </div>
  )
}

export default Header
