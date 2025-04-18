import React from 'react'
import styles from './Services.module.scss'
import { FaGift } from "react-icons/fa6";

const Services = () => {
  return (
    <div className={styles.container}>
        <h2 id={styles.title}>Services</h2>
        <div className={styles.content}>
          <div className={styles.icon}>
            <FaGift id={styles.icon}/>
          </div>
          <div className={styles.par}>
            <h2>Make Success for future</h2>
            <p>You are free to use this template for your commercial or business websites. You are not allowed to  <br/>re-distribute this template ZIP file on any template collection websites. It is too easy to illegally copy <br/> and repost this template.</p>
          </div>
        </div>
    </div>
  )
}

export default Services