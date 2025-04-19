import React from 'react'
import { BsBuildings } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa";
import { CiPhone } from "react-icons/ci";
import { BiMailSend } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFlickr } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>

            <div className={styles.company}>

                <div className={styles.logo}>

                    <div className={styles.ico}>
                        <BsBuildings id={styles.icon}/>
                        <span id={styles.top}>Purple</span>
                        <span>Buzz</span>
                    </div>

                    <div className={styles.par}>
                        <p>Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit, sed do eiusmod tempor <br />incididunt ut.</p>
                    </div>

                    <div className={styles.iconbox}>
                        
                        <FaFacebookF id={styles.icon}/>
                        <FaLinkedinIn id={styles.icon}/>
                        <FaWhatsapp id={styles.icon}/>
                        <FaFlickr id={styles.icon}/>
                        <FaMedium id={styles.icon}/>

                    </div>
                
                </div>

            </div>

            <div className={styles.columns}>

                <div className={styles.col}>

                    <h3>Our Company</h3>

                    <div className={styles.links}>
                        <a href="/home"><FaChevronRight id={styles.icon}/>Home</a>                    
                        <a href="#"><FaChevronRight id={styles.icon}/>About Us</a>                    
                        <a href="#"><FaChevronRight id={styles.icon}/>Work</a>                    
                        <a href="#"><FaChevronRight id={styles.icon}/>Price</a>                    
                        <a href="/contact"><FaChevronRight id={styles.icon}/>Contact</a>                    
                    </div>

                </div>

                <div className={styles.col}>
                 
                    <h3>Our Works</h3>

                    <div className={styles.links}>
                        <a href="#"><FaChevronRight id={styles.icon}/>Branding</a>                    
                        <a href="#"><FaChevronRight id={styles.icon}/>Business</a>                    
                        <a href="#"><FaChevronRight id={styles.icon}/>Marketing</a>                    
                        <a href="#"><FaChevronRight id={styles.icon}/>Social Media</a>                    
                        <a href="#"><FaChevronRight id={styles.icon}/>Digital Solution</a>                    
                        <a href="#"><FaChevronRight id={styles.icon}/>Graphic</a>   
                    </div>                

                </div>

                <div className={styles.col}>
                 
                    <h3>For Client</h3>

                    <div className={styles.contact}>
                        <p><CiPhone id={styles.icon}/>010-020-0340</p>
                        <p><BiMailSend id={styles.icon}/>info@company.com</p>
                    </div>



                </div>



            </div>


        </div>
    </div>
  )
}

export default Footer
