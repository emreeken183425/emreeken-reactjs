
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


type productType = {
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
 
};

const Products = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
 const navigate=useNavigate()
 
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
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    get_product();
    
  }, [ ]);

  const filteredResult=(categoryName:any)=>{
  const result=product.filter((el:productType)=>{
  return el.category === categoryName 
  
  }
  
  )

  setProduct(result);
 
  } 

  

  return (
<>
<div className='flex m-2 text-center  justify-evenly mb-5 mt-4 p-2 '>
        
<button className='btn btn-outline-line bg-warning ' onClick={()=>{filteredResult('Clothing')}} > Clothing </button>  
<button className='btn btn-outline-line bg-warning ' onClick={()=>{filteredResult('Electronics')}} > Electronics </button>  
<button className='btn btn-outline-line bg-warning ' onClick={()=>{filteredResult('Accessories')}} > Accessories </button>  
<button className='btn btn-outline-line bg-warning ' onClick={()=>{filteredResult('Furniture')}} > Furniture </button>  
<button className='btn btn-outline-line bg-warning ' onClick={()=>{filteredResult('Hobby')}} > Hobby </button>  
<button className='btn btn-outline-line bg-warning ' onClick={()=>{get_product() }} > All </button>  
 
           
      
        
</div>
           

    <div  className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5 ' >
       {product.map((product: productType) => (
         
        <div  className="card w-96 bg-base-100 shadow-xl  ">
        <figure >
          <img onClick={()=>{navigate('detail',{state:product} )}} className=" imgStyle max-h-80 w-52 " src={product.avatar}   alt={product.name}  />
        </figure>
        <div className="card-body">
         <div className="d-flex justify-around " >
         <h2 className="card-title justify-start">
            {product.name}</h2>
            <div className="badge badge-primary p-3 d-flex align-items-center ">{product.price} TL </div>
         </div>
          
          
          <div className="card-actions justify-center mb-0 ">
            <div className="badge badge-primary p-3 d-flex align-items-center ">{product.category }
           </div>           
          </div>
          
        </div>
        <div className="justify-center mb-0 " >
          <button onClick={()=>navigate('favori') } className='mb-1 btn btn-outline-line bg-primary justify-start '> ❤ ADD FAVORİTE  </button>
          </div>
      </div>
      ))}

      

     
    </div>
    </>
  );
};

export default Products;
