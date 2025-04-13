import React, { useState, useEffect } from "react";
import styles from './Section8.module.scss'

const Section8 = () => {

  return (
    <div className={styles.container}>
      
        <div className={styles.content}>
         
            <div className={styles.titles}>
                        
                <h3>People Says</h3>
                <h2>Testimonials</h2>
                        
            </div>

            <div className={styles.cards}>
             
                <div className={styles.card}>

                    <div className={styles.profile}>
                        <img src="https://preview.colorlib.com/theme/selling/images/person_3.jpg" alt="" />
                    </div>

                    <div className={styles.par}>
                        <p>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.”</p>
                    </div>

                    <div className={styles.name}>

                        <p><strong>John Smith</strong></p>

                    </div>


                </div>



            </div>


        </div>




    </div>
  )
}

export default Section8
