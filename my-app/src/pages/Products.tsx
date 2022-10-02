
import { useState, useEffect } from "react";
import axios from "axios";

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
  }, []);
  return (
    <div  className='grid sm:grid-cols-2 lg:grid-cols-3 gap-3 ' >
       {product.map((product: productType) => (
         
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure >
          <img className="max-h-80 " src={product.avatar}   alt={product.name}  />
        </figure>
        <div className="card-body">
          <h2 className="card-title justify-start">
            {product.name}
            <div className="badge badge-primary">{product.price} TL </div>
          </h2>
          
          <div className="card-actions justify-center mb-0 ">
            <div className="badge badge-primary  ">{product.category }
           </div>
            
          </div>
        </div>
      </div>
      ))}

      

     
    </div>
  );
};

export default Products;
