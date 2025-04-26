import React from 'react'
import styles from './Header.module.scss'
import { SlMagnifier } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from 'react-router'
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <div className={styles.container}>
      
      <header>

        <div className={styles.logo}>
          <Link to={'/'}>Dealers</Link>
        </div>

        <nav>

          <a href="#">Collection</a>
          <a href="#">Shop</a>
          <a href="#">Catalogs</a>
          <Link to={'/contact'}>Contact</Link>

        </nav>

        <div className={styles.iconbox}>

          <SlMagnifier id={styles.icon_search}/>
          <CiHeart id={styles.icon}/>
          <FaShoppingBag id={styles.icon}/>

        </div>

        <div className={styles.burger}>
          <GiHamburgerMenu id={styles.icon}/>
        </div>

      </header>

    </div>
  )
}

export default Header
