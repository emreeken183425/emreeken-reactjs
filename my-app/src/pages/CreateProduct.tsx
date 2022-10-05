

  

const CreateProduct = () => {
  
  
  return (
    <div>
   
         <div  className='createproduct grid sm:grid-cols-2 lg:grid-cols-3 gap-5 ' >         
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
    </div>
    <div className="justify-center  ">
    <button className='m-1  btn btn-outline-light bg-primary ' >✅ CREATE</button>
    </div>
</div>
  )
}

export default CreateProduct