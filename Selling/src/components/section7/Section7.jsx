import React from 'react'
import { MdPieChart } from "react-icons/md";
import { FaBackspace } from "react-icons/fa";
import { MdAvTimer } from "react-icons/md";
import { MdBeenhere } from "react-icons/md";
import { MdBusinessCenter } from "react-icons/md";
import { IoIosCloudDone } from "react-icons/io";
import styles from './Section7.module.scss'

const Section7 = () => {
  return (
    <div className={styles.container}>

        <div className={styles.content}>

            <div className={styles.titles}>
            
                <h3>Our Services</h3>
                <h2>We Offer Services</h2>
            
            </div>

            <div className={styles.services}>
             
                <div className={styles.card}>

                    <div className={styles.icon}>
                     
                        <div className={styles.ico}>
                            <MdPieChart/>
                        </div>

                    </div>

                    <div className={styles.textbox}>

                        <h3>Business Consulting</h3>
                        <p id={styles.par}>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br /> Perferendis quis molestiae vitae <br /> eligendi at.</p>
                        <p><a href="#">Learn More</a></p>
                     
                    </div>

                </div>

                <div className={styles.card}>

                    <div className={styles.icon}>
                     
                        <div className={styles.ico}>
                            <FaBackspace/>
                        </div>

                    </div>

                    <div className={styles.textbox}>

                        <h3>Market Analysis</h3>
                        <p id={styles.par}>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br /> Perferendis quis molestiae vitae <br /> eligendi at.</p>
                        <p><a href="#">Learn More</a></p>
                     
                    </div>



                </div>

                <div className={styles.card}>

                    <div className={styles.icon}>
                     
                        <div className={styles.ico}>
                            <MdAvTimer/>
                        </div>

                    </div>

                    <div className={styles.textbox}>

                        <h3>User Monitoring</h3>
                        <p id={styles.par}>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br /> Perferendis quis molestiae vitae <br /> eligendi at.</p>
                        <p><a href="#">Learn More</a></p>
                     
                    </div>



                </div>

                <div className={styles.card}>

                    <div className={styles.icon}>
                     
                        <div className={styles.ico}>
                            <MdBeenhere/>
                        </div>

                    </div>

                    <div className={styles.textbox}>

                        <h3>Seller Consulting</h3>
                        <p id={styles.par}>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br /> Perferendis quis molestiae vitae <br /> eligendi at.</p>
                        <p><a href="#">Learn More</a></p>
                     
                    </div>



                </div>

                <div className={styles.card}>

                    <div className={styles.icon}>
                     
                        <div className={styles.ico}>
                            <MdBusinessCenter/>
                        </div>

                    </div>

                    <div className={styles.textbox}>

                        <h3>Financial Investment</h3>
                        <p id={styles.par}>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br /> Perferendis quis molestiae vitae <br /> eligendi at.</p>
                        <p><a href="#">Learn More</a></p>
                     
                    </div>



                </div>

                <div className={styles.card}>

                    <div className={styles.icon}>
                     
                        <div className={styles.ico}>
                            <IoIosCloudDone/>
                        </div>

                    </div>

                    <div className={styles.textbox}>

                        <h3>Financial Management</h3>
                        <p id={styles.par}>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. <br /> Perferendis quis molestiae vitae <br /> eligendi at.</p>
                        <p><a href="#">Learn More</a></p>
                     
                    </div>



                </div>

            </div>

         
        </div>


    </div>
  )
}

export default Section7
