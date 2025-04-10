import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Categories from "./components/categories/Categories";
import Card from "./components/card/Card";
import './App.css'
import axios from "axios";

function App() {
  const [data,setData] = useState([]);

  const getData = () => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setData(res.data)
    });
  };

  useEffect(() => {
    getData();
  });


  return (
        

        <div className="cont">
          <Header />
          <Categories />
    
          

            <div className="card">
              {data && data.map(item => <Card item={item}/>)}
            </div>


        </div>




          


        
      );


}








// function App() {
//   const [data, setData] = useState([]);
//   // window.onload = () => {
//   //   axios.get("https://fakestoreapi.com/products").then((res) => {
//   //     setData(res.data);
//   //   });
//   // };

//   const getData = () => {
//     axios.get("https://fakestoreapi.com/products").then((res) => {
//       setData(res.data);
//     });
//   };

//   useEffect(() => {
//     getData();
//   });

//   return (
//     <>
//       <Header />
//       <Categories />
//       <Card />

//       <div className="cards">
//         <div className="content">
//           <h1 className="title">Best Selling</h1>

//           <div
//             className="pr"
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               alignContent: "center",
//               flexWrap: "wrap",
//               width: "100%",
//               gap: "40px",
//             }}
//           >
//             {data && data.map((item) => <Card item={item} />)}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

export default App;

// const App = () => {

//   const [data, setData] = useState([]);

//   const getData = () => {
//     axios.get("https://fakestoreapi.com/products").then((res) => {
//       setData(res.data);
//     });
//     };

//     useEffect(() => {
//       getData();
//     })

//   return (
//     <>

//     <Header/>
//     <Categories/>
//     <Card/>

//     </>
//   )
// }
