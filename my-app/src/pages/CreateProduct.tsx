import axios from "axios";
import { useState } from "react";

const CreateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [avatar, setAvatar] = useState("");
  const [desc, setDesc] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const newProduct = {
      name: name,
      avatar: avatar,
      description: desc,
      price: price,
      category: category,
      developerEmail: "ekenemre1834@gmail.com",
    };

    const api_Url =
      "https://upayments-studycase-api.herokuapp.com/api/products/";
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVrZW5lbXJlMTgzNEBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vZW1yZWVrZW4xODM0MjUiLCJpYXQiOjE2NjQ2MzE2NjEsImV4cCI6MTY2NTA2MzY2MX0.iILWqp8iuGbdcG1PT9l1rrICgq6nuEBjyU5Q4Z-a6Zc";
    const config = { headers: { Authorization: `Bearer ${token}` } };
    /*take only token and save in token variable*/
    try {
      axios.post(api_Url, newProduct, config);
      console.log("gönderildi");
    } catch (error) {
      console.log(error);
    }
    console.log(newProduct);
  };

  return (
    <div>
      <form className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 bg-slate-800 mt-5 "
        action=""
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
       <div className=" text-white gap-5 mt-5 ">
       <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />
       </div>
       <div className=" text-white gap-5 mt-5 ">
       <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          required
        />
       </div>
        <div className=" text-white gap-5 mt-5 " >
        <label htmlFor="category">category:</label>
        {/* <input type="text" id="category" onChange={(e)=>{setCategory(e.target.value)}}required /> */}
        <select name="category" id="category" onChange={(e)=>setCategory(e.target.value)} >
          <option value="Clothing">Clothing</option>
          <option value="Electronics">Electronics</option>
          <option value="Accessories">Accessories</option>
          <option value="Furniture">Furniture</option>
          <option value="Hobby">Hobby</option>
        </select>
        </div>
        <div className=" text-white gap-5 mt-5 ">
        <label htmlFor="avatar">avatar:</label>
        <input
          type="text"
          id="avatar"
          onChange={(e) => {
            setAvatar(e.target.value);
          }}
          required
        />
        </div>
       <div className=" text-white gap-5 mt-5 ">
       <label htmlFor="description">description:</label>
        <input
          type="text"
          id="description"
          onChange={(e) => {
            setDesc(e.target.value);
          }}
          required
        />
       </div>
        <div className=" text-white gap-5 mt-5 ">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />
        </div>
        <div className=" text-white   ">
        <button  className='m-2 btn btn-outline-light bg-warning ' type="submit">SUBMİT</button>
        </div>
      </form>

      {/* <div  className='createproduct grid sm:grid-cols-2 lg:grid-cols-3 gap-5 ' >         
             <div  className="card w-96 bg-base-100 shadow-xl  ">
                  <figure >
                      <img  className=" imgStyle max-h-80 w-52 " src={''}   alt={''}  />
                  </figure>
               <div className="card-body">
               <div className="d-flex justify-around " >
                 <h2 className="card-title justify-start"> name</h2>
               <div className="badge badge-primary p-3 d-flex align-items-center ">price TL </div>
               </div>
              </div>
          
            <div className="card-actions justify-center mb-0 ">
            <div className="badge badge-primary p-3 d-flex align-items-center ">description</div>
          </div>
          <div className="card-actions justify-center mb-0 ">
            <div className="badge badge-primary p-3 d-flex align-items-center ">category</div>
          </div>     
    </div>
    </div> */}
      {/* 
    <div className="justify-center  ">
    <button className='m-1  btn btn-outline-light bg-primary ' >✅ CREATE</button>
    </div> */}
    </div>
  );
};

export default CreateProduct;
