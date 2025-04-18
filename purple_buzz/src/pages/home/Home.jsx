import React from 'react'
import styles from './Home.module.scss'
import Services from '../../components/services-p/Services';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.center}>

          <h1>HTML CSS Template with <br /> Bootstrap 5 Beta 1</h1>
          <p>You are not allowed to re-distribute this Purple Buzz HTML template as a downloadable ZIP file on any kind of Free CSS <br/> collection websites. This is strongly prohibited. Please contact TemplateMo for more information.</p>
          <button>Get Started</button>

        </div>
      </div>

      <Services/>

    </div>
  )
}

export default Home