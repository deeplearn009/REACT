import React, { useEffect } from 'react'
import styles from './Home.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { setProducts } from '../../redux/reducers/basketSlice';
import Header from '../../components/header/Header';
import Card from '../../components/Card/Card';

const Home = () => {

    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then(res => {
            dispatch(setProducts(res.data));
        })
    }),[dispatch]


  return (
    <div className={styles.container}> 
      <div className={styles.products}>
        {products.map(product => (<Card key={product.id} product={product}/>))}
      </div>
    </div>
  )
}

export default Home
