import React from 'react'
import  { useState,useEffect } from 'react';
import axios from 'axios'

type categoryType={
  _id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

const Category = () => {

  const [category, setCategory] = useState([])
  
  useEffect(() => {
    get_category()
    
    
  }, [])

  const get_category=()=>{
  
    const api_Url = 'https://upayments-studycase-api.herokuapp.com/api/categories/'; 
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVrZW5lbXJlMTgzNEBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vZW1yZWVrZW4xODM0MjUiLCJpYXQiOjE2NjQ2MzE2NjEsImV4cCI6MTY2NTA2MzY2MX0.iILWqp8iuGbdcG1PT9l1rrICgq6nuEBjyU5Q4Z-a6Zc"; 
    const config={ headers: {"Authorization" : `Bearer ${token}`} }
/*take only token and save in token variable*/
      axios.get(api_Url ,config ).then((res)=>setCategory(res.data.categories)).catch((err)=>console.log(err))

 }


 return (
  <div>
    {
     
      <div className='flex m-5 justify-between border-2 border-blue-600 p-1 '>
        {
          category.map((category:categoryType)=>(
            <div className='' >{category.name} </div>
          ) )
        }
      </div>
    
      
    }

  </div>
)
}

export default Category
