import React, {useEffect, useState} from 'react'
import Header from './components/header/Header'
import Products from './components/products/Products'
import Cards from './components/cards/Card'
import './App.scss'
import axios from 'axios'

function App() {
  const [data, setData] = useState([]);
  // window.onload = () => {
  //   axios.get("https://fakestoreapi.com/products").then((res) => {
  //     setData(res.data);
  //   });
  // };

const getData = () => {
  axios.get("https://fakestoreapi.com/products").then((res) => {
    setData(res.data);
  });
  };

  useEffect(() => {
    getData();
  })





  return (
    <>
    
    <Header/>
    <Products/>

    <div className='cards'>

      <div className="content">

        <h1 className='title'>Best Selling</h1>

        <div className='pr' style={{display: "flex", justifyContent: "center", alignContent: "center", flexWrap: "wrap", width: "100%", gap: "40px"}}>
          {data && data.map(item => <Cards item={item}/>)}
        </div>



      </div>

     

    </div>
    </>
  );


}

export default App
