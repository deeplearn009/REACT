import React from 'react'
import styles from '../contact/Contact.module.scss'

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contact}>
        <div className={styles.left}>

          <h1>Contact</h1>
          <h3>Elit, sed do eiusmod tempor</h3>
          <p>Vector illustration is from <a href="#">StorySet</a>. Incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>

        </div>

        <div className={styles.right}>

          <img src="https://themewagon.github.io/purple-buzz/assets/img/banner-img-01.svg" alt="" />
          
        </div>
        
      </div>


      
    </div>
  )
}

export default Contact