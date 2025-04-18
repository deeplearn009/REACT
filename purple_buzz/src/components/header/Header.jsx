import React from 'react'
import styles from './Header.module.scss'
import { BsBuildings } from "react-icons/bs";
import { Link } from 'react-router';
import { FaBell } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <div className={styles.container}>
      <header>
        <div className={styles.logo}>
         <BsBuildings id={styles.icon}/>
         <span id={styles.top}>Purple</span>
         <span>Buzz</span>

        </div>

        <div className={styles.navbar}>

          <Link to="/">Home</Link>
          <a href="#">About</a>
          <a href="#">Work</a>
          <a href="#">Pricing</a>
          <Link to="/contact">Contact</Link>

        </div>

        <div className={styles.iconbox}>

          <FaBell id={styles.icon}/>
          <FaCog id={styles.icon}/>
          <FaRegUserCircle id={styles.icon}/>

        </div>

        <div className={styles.burger}>
          <GiHamburgerMenu id={styles.icon}/>
        </div>





      </header>
    </div>
  )
}

export default Header