import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Categories from "./components/categories/Categories";
import Section1 from "./components/section1/section1";
import Section2 from "./components/section2/Section2";
import Card from "./components/card/Card";
import "./App.scss";
import axios from "axios";

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
    <div className="cont">
      <Header />
      <Section1 />
      <Section2 />

      <div className="title">
        <h2>New Arrivals</h2>
        <div className="red_line"></div>
      </div>




      <Categories />

      



      <div className="card">
        {data && data.slice(0, 10).map((item) => <Card item={item} />)}
      </div>
    </div>
  );
}

export default App;
