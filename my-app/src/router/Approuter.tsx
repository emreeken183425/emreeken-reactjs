import { Route,Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import CreateProduct from '../pages/CreateProduct'
import Home from '../pages/Home'
import Login from '../pages/Login'
import ProductDetail from '../pages/ProductDetail'
import Register from '../pages/Register'

const AppRouter = () => {
  return (

<>
  <Navbar />
  <Routes>
      <Route path='/' element={<Home /> }  />
      <Route path='/login' element={<Login /> }  />
      <Route path='/register' element={<Register /> }  />
      <Route path='detail' element={<ProductDetail /> }  />
      <Route path='/create' element={<CreateProduct /> }  />

  </Routes>
  </>

    
  )
}

export default AppRouter