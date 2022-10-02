import React from 'react'
import Category from './Category'
import ProductDetail from './ProductDetail'



const Home = () => {
  return (
    <div className='flex flex-row space-x-4' >
         <div>
           <Category />
          </div>
          <div>
            <ProductDetail />
          </div>
    </div>
  )
}

export default Home
