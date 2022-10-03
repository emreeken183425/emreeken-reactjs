
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { logOut } from '../auth/firebase';
import { AuthContext } from '../context/AuthContext';




const Navbar = () => {
const { currentUser } = useContext(AuthContext);

const navigate=useNavigate() 

// const currentUser=  {displayName:"emre eken"}
 


  return (
    <div>
      <nav className='navbar navbar-expand-lg bg-primary ' >
        <div className="container-fluid">
          <Link to={'/'} className='navbar-brand text-white' >
          <h1 style={{fontSize:'25px'}} >UPayments React JS Case Study</h1>
          </Link>
          <div className="d-flex text-white align-items-center ">
          {currentUser ? (
            <>
            <h2 className='mb-0 text-capitalize' > {currentUser.email}  </h2>
            <button className='m-2 btn btn-outline-light' onClick={()=>logOut} >Logout  </button>
            <button>Create Product</button>
            </>
          ) : (
            <>
            <button className='m-2 btn btn-outline-light' onClick={()=>navigate('login') }  >Login  </button>
            <button className='m-2 btn btn-outline-light'  onClick={()=>navigate('register') } >Register  </button>
            </>
          )
          
           }

          </div>
        </div>

      </nav>

    </div>
  )
}

export default Navbar
