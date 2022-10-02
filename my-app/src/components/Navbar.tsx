
import { Link, useNavigate } from 'react-router-dom'



const Navbar = () => {
const navigate=useNavigate() 
// const currentUser=  {displayName:"emre eken"}
const currentUser=false ; 


  return (
    <div>
      <nav className='navbar navbar-expand-lg bg-primary ' >
        <div className="container-fluid">
          <Link to={'/'} className='navbar-brand text-white' >
          <h1>UPayments React JS Case Study</h1>
          </Link>
          <div className="d-flex text-white align-items-center ">
          {currentUser ? (
            <>
            {/* <h2 className='mb-0 text-capitalize' > {currentUser.displayName}  </h2> */}
            <button className='m-2 btn btn-outline-light'  >Logout  </button>
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
