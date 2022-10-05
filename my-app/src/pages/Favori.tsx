import { useContext } from "react"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"



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

const Favori = () => {
  const navigate = useNavigate();
  const {favorites}=useContext(AuthContext)


  return (
    <div  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 " >
     {favorites.map((product: productType) => (
      <div className="card w-96 bg-base-100 shadow-xl  ">
            <figure>
              <img
                onClick={() => {
                  navigate("detail", { state: product });
                }}
                className=" imgStyle max-h-80 w-52 "
                src={product.avatar}
                alt={product.name}
              />
            </figure>
            <div className="card-body">
              <div className="d-flex justify-around ">
                <h2 className="card-title justify-start">{product.name}</h2>
                <div className="badge badge-primary p-3 d-flex align-items-center ">
                  {product.price} TL{" "}
                </div>
              </div>

              <div className="card-actions justify-center mb-0 ">
                <div className="badge badge-primary p-3 d-flex align-items-center ">
                  {product.category}
                </div>
              </div>
            </div>
            
          </div>
             ))}
    </div>
  )
}

export default Favori