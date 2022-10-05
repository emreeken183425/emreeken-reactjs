import {  useLocation } from "react-router-dom";

const ProductDetail = () => {
  const { state } = useLocation();

  console.log(state);

  return (
    <div className=" m-auto w-96 card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img className="max-h-80 w-52 mt-2" src={state.avatar} alt="Album" />
      </figure>
      <div className="card-body justify-start ">
      <div className="d-flex justify-around ">
                <h2 className="card-title justify-start">{state.name}</h2>
                <div className="badge badge-primary p-3 d-flex align-items-center ">
                  {state.price} TL{" "}
                </div>
              </div>
        <p>{state.description} </p>
        <div className="card-actions justify-center">
          <div className="card-actions justify-center mb-0 ">
            <div className="badge badge-primary p-3 d-flex align-items-center ">{state.category}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
