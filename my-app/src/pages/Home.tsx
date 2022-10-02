
import { useState } from 'react'
import Category from '../components/Category'
import Products from './Products'




const Home = () => {
 
  




  return (
    <div className='flex flex-col ' >
     
         <div>
           <Category />
          </div>
          <div  >
            <Products />
          </div>
    </div>
  )
}

export default Home
