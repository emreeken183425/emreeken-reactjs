
import { useState,useEffect } from 'react'
//import Category from '../components/Category'
import axios from 'axios'
import Products from './Products'



const Home = ( ) => {
const [product, setProduct] = useState([]);



  const get_product = () => {
    const api_Url =
      "https://upayments-studycase-api.herokuapp.com/api/products/";
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVrZW5lbXJlMTgzNEBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vZW1yZWVrZW4xODM0MjUiLCJpYXQiOjE2NjQ2MzE2NjEsImV4cCI6MTY2NTA2MzY2MX0.iILWqp8iuGbdcG1PT9l1rrICgq6nuEBjyU5Q4Z-a6Zc";
    const config = { headers: { Authorization: `Bearer ${token}` } };
    /*take only token and save in token variable*/
    axios
      .get(api_Url, config)
      .then((res) => setProduct(res.data.products))
      .catch((err) => console.log(err))
      
  };
  useEffect(() => {
    get_product();
  }, []);



console.log(product)
  return (
    <div className='flex flex-col ' >
      

         {/* <div>
            <Category  />
          </div> */}
          <div  >
            <Products />
          </div>
    </div>
  )
}

export default Home
