import { Link, useLocation } from "react-router-dom";

const ProductDetail = () => {
  const { state } = useLocation();

  console.log(state);

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img className="max-h-80 w-40" src={state.avatar} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title"> {state.name}</h2>
        <p>{state.price} TL</p>
        <p>{state.description} </p>
        <div className="card-actions justify-end">
          <div className="card-actions justify-center mb-0 ">
            <div className="badge badge-primary  ">{state.category}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
