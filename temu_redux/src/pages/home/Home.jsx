import React, { useEffect } from 'react'
import styles from './Home.module.scss'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { setProducts } from '../../redux/reducers/basketSlice'
import Card from '../../components/card/Card'

const Home = () => {

    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then(res => {
            dispatch(setProducts(res.data));
        })
    }),[dispatch]


  return (

    <>
    
    <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    
    <div className={styles.container}>
        <div className={styles.cardbox}>
            {products.map(product => (<Card key={product.id} product={product}/>))}
        </div>
    </div>

    
    
    </>




  )   
}

export default Home
