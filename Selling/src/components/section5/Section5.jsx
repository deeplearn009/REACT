import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import styles from './Section5.module.scss'
const Section5 = () => {
  return (
    <div className={styles.container}>
      
        <div className={styles.titles}>

            <h3>Team</h3>
            <h2>Leadership</h2>
                
        </div>

        <div className={styles.cardbox}>
         
            <div className={styles.card}>
             
                <div className={styles.profile}>
                    <img src="https://preview.colorlib.com/theme/selling/images/person_2.jpg.webp" alt="" />
                </div>

                <div className={styles.name}>
                    <h3>John Rooster</h3>
                    <p>Co-Founder, President</p>
                </div>

                <div className={styles.par}>

                    <p>Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
                 
                </div>

                <div className={styles.iconbox}>

                    <FaFacebook id={styles.icon}/>
                    <FaTwitter id={styles.icon}/>
                    <FaLinkedinIn id={styles.icon}/>
                    <FaInstagram id={styles.icon}/>
                 
                </div>



            </div>

            <div className={styles.card}>
             
                <div className={styles.profile}>
                    <img src="https://preview.colorlib.com/theme/selling/images/person_3.jpg.webp" alt="" />
                </div>

                <div className={styles.name}>
                    <h3>Tom Sharp</h3>
                    <p>Co-Founder, COO</p>
                </div>

                <div className={styles.par}>

                    <p>Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
                 
                </div>

                <div className={styles.iconbox}>

                    <FaFacebook id={styles.icon}/>
                    <FaTwitter id={styles.icon}/>
                    <FaLinkedinIn id={styles.icon}/>
                    <FaInstagram id={styles.icon}/>
                 
                </div>



            </div>

            <div className={styles.card}>
             
                <div className={styles.profile}>
                    <img src="https://preview.colorlib.com/theme/selling/images/person_4.jpg.webp" alt="" />
                </div>

                <div className={styles.name}>
                    <h3>Winston Hodson</h3>
                    <p>Marketing</p>
                </div>

                <div className={styles.par}>

                    <p>Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
                 
                </div>

                <div className={styles.iconbox}>

                    <FaFacebook id={styles.icon}/>
                    <FaTwitter id={styles.icon}/>
                    <FaLinkedinIn id={styles.icon}/>
                    <FaInstagram id={styles.icon}/>
                 
                </div>



            </div>

            


        </div>




    </div>
  )
}

export default Section5
