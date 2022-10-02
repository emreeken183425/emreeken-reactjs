import { Link,useNavigate } from 'react-router-dom';
//import { useDispatch, useSelector } from 'react-redux';


 const Nav = () => {
//   const navigate=useNavigate();
//   const user=useSelector((state)=>state.auth.user)
//  const handleLogout=()=>{
//   // clear user date
//   navigate("login")
//  }
  return (
    <div className='navbar navbar-expand-lg bg-green-300 p-3' >
      <ul className="container d-flex justify-content-around mt-4   ">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/category">Category</Link>
        </li>
        <li>
          <Link to="/createproduct">Create Product</Link>
        </li>
        <li>
           <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
      {/* {user ? ( <button className='btn btn-secondary m-2 ' onClick={handleLogout }  >Logout</button>):
        (<button className='btn btn-secondary m-2  ' onClick={()=>navigate("/") } >Login</button>)
        } */}
     
    </div>
  );
};

export default Nav;
