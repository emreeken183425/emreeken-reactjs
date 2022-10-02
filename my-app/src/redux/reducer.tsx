import React, { useState,useEffect } from 'react';
import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';



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

  const initialState = {
    product:[],
    category:[],
    loading:true
};

  
  
// export const get_category=createAsyncThunk(
//     'data/get_category',
//     async ()=>{
//         const api_Url = 'https://upayments-studycase-api.herokuapp.com/api/categories/'; 
//         const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVrZW5lbXJlMTgzNEBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vZW1yZWVrZW4xODM0MjUiLCJpYXQiOjE2NjQ2MzE2NjEsImV4cCI6MTY2NTA2MzY2MX0.iILWqp8iuGbdcG1PT9l1rrICgq6nuEBjyU5Q4Z-a6Zc"; 
//         const config={ headers: {"Authorization" : `Bearer ${token}`} }

//        try {
        
//         const {data}= await axios.get(api_Url ,config )
//         return data.categories 

//        } catch (error) {
//         console.log(error);
        
//        }

      
//     }
//   ) 
    
// export const get_product=createAsyncThunk(
//     'data/get_product',
//     async ()=>{
//       const api_Url = 'https://upayments-studycase-api.herokuapp.com/api/products/'; 
//       const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVrZW5lbXJlMTgzNEBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vZW1yZWVrZW4xODM0MjUiLCJpYXQiOjE2NjQ2MzE2NjEsImV4cCI6MTY2NTA2MzY2MX0.iILWqp8iuGbdcG1PT9l1rrICgq6nuEBjyU5Q4Z-a6Zc"; 
//       const config={ headers: {"Authorization" : `Bearer ${token}`} }

//        try {
        
//         const {data}= await axios.get(api_Url ,config )
//         return data.products 

//        } catch (error) {
//         console.log(error);
        
//        }

      
//     }
//   )
    
// const dataSlice=createSlice({
//     name:'data',
//     initialState,
//     reducers:{
//         clearProduct:(state)=>{
//             state.product=[];
//         },
//     },

//     extraReducers: {
//         [get_product.pending]: (state:any, action:any) => {
//           state.loading = true;
//         },
//         [get_product.fulfilled]: (state:any, { payload }) => {
//           state.loading = false;
//           state.product = payload;
//         },
//         [get_product.rejected]: (state:any) => {
//           state.loading = false;
//         },
//       },

    
// } )
  
  
  
    


