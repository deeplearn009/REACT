import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.container}>

        <div className={styles.content}>
         
            <div className={styles.columns}>

                <div className={styles.col}>

                    <h2>About Us</h2>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.</p>
                 
                </div>

                <div className={styles.col_links}>
                 
                    <h2>Quick Links</h2>

                    <div className={styles.links}>
                        <a href="#">About Us</a>
                        <a href="#">Services</a>
                        <a href="#">Testimonials</a>
                        <a href="#">Contact Us</a>
                    </div>

                </div>

                <div className={styles.col}>

                    <h2>Follow Us</h2>

                    <div className={styles.iconbox}>


                        <div className={styles.icon}>
                            <FaFacebookF/>
                        </div>

                        <div className={styles.icon}>
                            <FaTwitter/>
                        </div>
                        
                        <div className={styles.icon}>
                            <FaInstagram/>
                        </div>            

                        <div className={styles.icon}>
                            <FaLinkedinIn/>
                        </div>
                        
                     
                    </div>
                 
                </div>

             
            </div>

            <div className={styles.product}>

                <h2>Featured Product</h2>

                <div className={styles.card}>
                 
                    <div className={styles.img}>
                        <img src="https://preview.colorlib.com/theme/selling/images/product_1_bg.jpg.webp" alt="" />
                    </div>

                    <h4>Leather Brown Shoe</h4>

                    <p><strong>$60.00</strong></p>

                    <button>ADD TO CART</button>


                </div>
             
            </div>



        </div>


      
    </div>
  )
}

export default Footer
