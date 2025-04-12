import React, { useState, useEffect } from "react";
import Header from './components/header/Header'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'
import Section3 from "./components/section3/Section3";
import Section4 from "./components/section4/Section4";
import Section5 from "./components/section5/Section5";
import Card from './components/card/Card'
import Banner from "./components/banner/Banner";
import './App.scss'
import axios from 'axios'

function App() {

  const [data, setData] = useState([]);

  const getData = () => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    getData();
  });
  


  return (
    <div className='container'>

      <Header/>
      <Section1/>
      <Section2/>

      <div className="section3">

        {data && data.slice(0, 6).map((item) => <Card item={item} />)}

      </div>

      <Banner/>
      <Section3/>
      <Section4/>
      <Section5/>


    </div>
  )
}

export default App
