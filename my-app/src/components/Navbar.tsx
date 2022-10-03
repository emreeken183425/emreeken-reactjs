
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { logOut } from '../auth/firebase';
import { AuthContext } from '../context/AuthContext';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { styled } from '@mui/material/styles';

// const CustomButton = styled(AccountCircleIcon)({
//   // your custom styles go here
// }) as typeof AccountCircleIcon;


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
            <button className='m-2 btn btn-outline-light' onClick={()=>logOut()} >Logout  </button>
            <button className='m-2 btn btn-outline-light' onClick={()=>navigate('/create')} >Create Product</button>
            <h6 className='mb-0 text-capitalize' > {currentUser.email}  </h6> 
            {/* <AccountCircleIcon/> */}
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
