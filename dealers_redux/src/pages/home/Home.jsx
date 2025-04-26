import React from 'react'
import styles from './Home.module.scss'
import F_banner from '../../components/f_banner/F_banner'
import Products from '../../components/products/Products'
import Banner_1 from '../../components/banners/banner_1/Banner_1'
import Collections from '../../components/collections/Collections'
import Banner_2 from '../../components/banners/banner_2/Banner_2'

const Home = () => {
  return (
    <div className={styles.container}>
      <F_banner/>
      <Products/>
      <Banner_1/>
      <Collections/>
      <Banner_2/>
    </div>
  )
}

export default Home
