import React, { useState } from 'react'
import styles from './Form.module.scss'
import axios from 'axios'
const Form = () => {

    const [fname, setFname] = useState('')
    const [sname, setSname] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const sendData = (e) => {
        e.preventDefault();
        axios.post("https://northwind.vercel.app/api/categories", {
            First_name: fname,
            Second_name: sname,
            Email: email,
            Subject: subject,
            Message: message
        });
    };


  return (
    <div className={styles.container}>

        <div className={styles.content}>
         
            <div className={styles.titles}>
                                                
                <h3>Contact Form</h3>
                <h2>Get In Touch</h2>
                                                
            </div>

            <form action="" onSubmit={sendData}>

                <h2>Contact Form</h2>

                <div className={styles.inp_name}>

                    <div className={styles.left}>

                        <label htmlFor="fName">First Name</label>

                        <input type="text" value={fname} onChange={(e) => setFname(e.target.value)}/>

                    </div>

                    <div className={styles.right}>
                     
                        <label htmlFor="sName">Last Name</label>

                        <input type="text" value={sname} onChange={(e) => setSname(e.target.value)}/>

                    </div>

                </div>

                 <div className={styles.email}>

                    <label htmlFor="eMail">Email</label>

                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                  
                 </div>

                 <div className={styles.subject}>
                  
                    <label htmlFor="subject">Subject</label>

                    <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)}/>

                 </div>

                 <div className={styles.textarea}>
                  
                    <label htmlFor="message">Message</label>

                    <textarea name="" id="" placeholder='Write your notes or questions here...' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

                 </div>

                <div className={styles.btn}>
                    <button type='submit'>SEND MESSAGE</button>
                </div>







            </form>



        </div>

      
    </div>
  )
}

export default Form
