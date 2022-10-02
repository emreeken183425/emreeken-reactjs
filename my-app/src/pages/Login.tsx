// import React, { useState } from 'react';
// //import { forgotPassword, signIn, signUpProvider } from '../auth/firebase.js';
// import { Navigate,useNavigate } from 'react-router-dom';
// import { setUser } from '../features/authSlice';
// import { useDispatch } from 'react-redux';


//  const Login = () => {
//    const [email, setEmail] = useState();
//    const [password, setPassword] = useState();
//    const navigate = useNavigate();
//    const dispatch = useDispatch();
//    const handleSubmit = (e:any) => {
//     e.preventDefault();
//     dispatch(setUser({ email, password }));
//     setEmail();
//     setPassword();
//     navigate('/');
//   };  

// //   const handleLogin = (e) => {
// //     e.preventDefault();
// //     signIn(email, password, navigate);
// //      console.log(email, password);
// //   };
// //   const handleProviderLogin = () => {
// //     signUpProvider(navigate);
// //   };

//   return (
//     <div className="d-flex justify-content-center">
//       <div className="form-image d-none d-md-block ">
//         <img src={'https://picsum.photos/700/520'} alt="sample-movie" />
//       </div>
//       <div className="register-form w-80 h-96">
//         <h1 className="form-title display-3 ">Login</h1>
//         <form id="register" onSubmit={handleLogin} >
//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">
//               Email
//             </label>
//             <input
//               type="email"
//               className="form-control"
//               id="email"
//               placeholder="Enter your email adress.."
//               required
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="password" className="form-label">
//               Password
//             </label>
//             <input
//               type="password"
//               className="form-control"
//               id="password"
//               placeholder="Enter your password.."
//               required
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
         
//         </form>
        
//       </div>
//     </div>
//   );
// };

// export default Login;

import React from 'react'

const Login = () => {
  return (
    <div>Login</div>
  )
}

export default Login