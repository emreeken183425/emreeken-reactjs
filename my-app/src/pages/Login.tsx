import {useState} from 'react'

const Login = () => {
  const [email, setEmail] = useState<number |string>()
  const [password, setPassword] = useState<number |string>()  
  
  const handleSubmit=(e:any)=>{
    e.preventDefault();
    console.log(email,password);
    
  }

  return (
    <div className="d-flex justify-content-center">
    <div className="form-image d-none d-md-block ">
      <img src={'https://picsum.photos/980/500'} alt="sample-product" />
    </div>
    <div className="login-form w-96 h-96 ">
      <h1 className="form-title display-3 ">Login</h1>
      <form id="register" onSubmit={handleSubmit} >
        
       
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email adress.."
            required
            onChange={(e)=>setEmail(e.target.value) }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your password.."
            required
            
          />
           <input
            type="submit"
            className="btn btn-primary form-control"
            value="Login"
            onChange={(e)=>setPassword(e.target.value) }
          />
        </div>
        
      </form>
    </div>
  </div>
  )
}

export default Login