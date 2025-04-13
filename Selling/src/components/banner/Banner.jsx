import React, { useState } from 'react'
import styles from './Banner.module.scss'
import axios from 'axios'
const Banner = () => {

  const [email,setEmail] = useState("")

  const sendData = (e) => {
    e.preventDefault();
    axios.post("https://northwind.vercel.app/api/categories", {
      email: email
    })

  };


  return (
    <div className={styles.container}>
      
      <div className={styles.content}>
       
        <div className={styles.title}>

            <h2>Get notified on each updates.</h2>

        </div>


        <div className={styles.inputs} onClick={sendData}>
         
          <input type="text" placeholder='Enter your email address' value={email} onChange={(e) => setEmail(e.target.value)}/>
          <button type="submit">SUBSCRIBE</button>

        </div>

        <div className={styles.par}>
         
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat commodi veniam <br /> doloremque ducimus tempora.</p>

        </div>




      </div>



    </div>
  )
}

export default Banner

