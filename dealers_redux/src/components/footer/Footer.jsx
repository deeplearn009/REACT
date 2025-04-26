import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.container}>
      
      <footer>

      <div className={styles.footerSection}>
        <div className={styles.aboutSection}>
          <h3 className={styles.heading}>About Us</h3>
          <p className={styles.aboutText}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quae reiciendis distinctio
            voluptates sed dolorum excepturi iure eaque, aut unde.
          </p>

          <div className={styles.subscribe}>
            <h3 className={styles.heading}>Subscribe</h3>
            <form className={styles.subscribeForm}>
              <input type="email" placeholder="Email" className={styles.emailInput} />
              <button type="submit" className={styles.sendButton}>SEND</button>
            </form>
          </div>
        </div>
      </div>

      <div className={styles.footerSection}>
        <h3 className={styles.heading}>Quick Links</h3>
        <div className={styles.linksContainer}>
          <div className={styles.linksColumn}>
            <a href="#" className={styles.link}>Sell online</a>
            <a href="#" className={styles.link}>Features</a>
            <a href="#" className={styles.link}>Shopping cart</a>
            <a href="#" className={styles.link}>Store builder</a>
          </div>
          
          <div className={styles.linksColumn}>
            <a href="#" className={styles.link}>Mobile commerce</a>
            <a href="#" className={styles.link}>Dropshipping</a>
            <a href="#" className={styles.link}>Website development</a>
          </div>
          
          <div className={styles.linksColumn}>
            <a href="#" className={styles.link}>Point of sale</a>
            <a href="#" className={styles.link}>Hardware</a>
            <a href="#" className={styles.link}>Software</a>
          </div>
        </div>
      </div>

      <div className={styles.footerSection}>
        <h3 className={styles.heading}>Contact Info</h3>
        <div className={styles.contactInfo}>
          <a href="#" className={styles.contactItem}>
            <span className={styles.icon}>📍</span> 
            203 Fake St. Mountain View, San Francisco, California, USA
          </a>
          <a href="tel:+23923929210" className={styles.contactItem}>
            <span className={styles.icon}>📞</span> 
            +2 392 3929 210
          </a>
          <a href="mailto:emailaddress@domain.com" className={styles.contactItem}>
            <span className={styles.icon}>✉️</span> 
            emailaddress@domain.com
          </a>
        </div>
      </div>


      </footer>



    </div>
  )
}

export default Footer
