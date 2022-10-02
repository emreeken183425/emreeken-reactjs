import React, { useState,useEffect } from 'react';
import './App.css';
import axios from 'axios'

type productType= {
  _id: string;
  name: string;
  avatar: string;
  description: string;
  price: number;
  category: string;
  developerEmail: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

type categoryType={
  _id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}


function App() {
  const [product, setProduct] = useState([])
  const [category, setCategory] = useState([])
  const [loading, setLoading] = useState(true)


const get_category=()=>{

const api_Url = 'https://upayments-studycase-api.herokuapp.com/api/categories/'; 
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVrZW5lbXJlMTgzNEBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vZW1yZWVrZW4xODM0MjUiLCJpYXQiOjE2NjQ2MzE2NjEsImV4cCI6MTY2NTA2MzY2MX0.iILWqp8iuGbdcG1PT9l1rrICgq6nuEBjyU5Q4Z-a6Zc"; 
const config={ headers: {"Authorization" : `Bearer ${token}`} }
/*take only token and save in token variable*/
axios.get(api_Url ,config ).then((res)=>setCategory(res.data.categories)).catch((err)=>console.log(err))

  }
  
const get_product=()=>{

    const api_Url = 'https://upayments-studycase-api.herokuapp.com/api/products/'; 
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVrZW5lbXJlMTgzNEBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vZW1yZWVrZW4xODM0MjUiLCJpYXQiOjE2NjQ2MzE2NjEsImV4cCI6MTY2NTA2MzY2MX0.iILWqp8iuGbdcG1PT9l1rrICgq6nuEBjyU5Q4Z-a6Zc"; 
    const config={ headers: {"Authorization" : `Bearer ${token}`} }
    /*take only token and save in token variable*/
    axios.get(api_Url ,config ).then((res)=>setProduct(res.data.products)).catch((err)=>console.log(err)).finally(()=>setLoading(false))
    
      }
console.log(category);


  useEffect(() => {
    get_category()
    get_product()
    
  }, [])
  
  return (
    <div className="App">
      
     {
        loading ? ( 
          <h1>Loading...</h1>
        ) :(
          <>
        <ul>
          {
            product.map((product: productType)=>(
              <li>{product.name} </li>
            ) )
          }
         
        </ul>

        <table>
          {
            category.map((category:categoryType)=>(
              <tr>{category.name} </tr>
            ) )
          }
        </table>
        </>
        )
      }


    </div>
  );
}

export default App;
