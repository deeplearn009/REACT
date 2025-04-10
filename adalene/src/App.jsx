import { useState } from 'react'
import { useEffect } from 'react'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Card from './components/card/Card'
import Footer from './components/footer/Footer'
import axios from 'axios'
import './App.scss'


function App() {
  
  
    const [data, setData] = useState([]);
  
  const getData = () => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setData(res.data);
    });
    };
  
    useEffect(() => {
      getData();
    })


  return (
    <div className='cont'>
      <Header/>
      <Navbar/>

      <div className="card" style={{width: "90%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", gap: "80px", paddingTop: "50px"}}>
              {data && data.slice(0, 4).map(item => <Card item={item}/>)}
      </div>

      <Footer/>
    </div>
    
  )
}

export default App
