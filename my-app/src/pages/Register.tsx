import { useState } from "react";


const Register = () => {

const [firstName, setFirstName] = useState<number |string|null|undefined>()  
const [lastName, setLastName] = useState<number |string>() 
const [email, setEmail] = useState<number |string>()
const [password, setPassword] = useState<number |string>()  

const handleSubmit=(e:any)=>{
  e.preventDefault();
  console.log(firstName,lastName);
  
}

  

  return (
    <div className="d-flex justify-content-center">
      <div className="form-image d-none d-md-block ">
        <img src={'https://picsum.photos/980/500'} alt="sample-product" />
      </div>
      <div className="register-form w-96 h-96 ">
        <h1 className="form-title display-3 ">Register</h1>
        <form id="register" onSubmit={handleSubmit} >
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="Enter your first name.."
              required
              onChange={(e)=>setFirstName(e.target.value) }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Enter your last name.."
              required
              onChange={(e)=>setLastName(e.target.value) }
            />
          </div>
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
              onChange={(e)=>setPassword(e.target.value) }
            />
          </div>
          <input
            type="submit"
            className="btn btn-primary form-control"
            value="Register"
          />
        </form>
      </div>
    </div>
  );
};

export default Register;