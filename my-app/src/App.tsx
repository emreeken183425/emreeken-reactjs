import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
//import store from './app/store';
import Nav from './components/Nav';
import Category from './pages/Category';
import CreateProduct from './pages/CreateProduct';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductDetail from './pages/ProductDetail';
import Register from './pages/Register';
// import AppRouter from './router/Approuter';
// import {Provider} from 'react-redux'

function App() {
 
  
  return (
    <div className="App">
      {/* <Provider store={store} >
      <AppRouter />
      </Provider> */}
       <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/ProductDetail/:id" element={<ProductDetail />} />          
          <Route path="/createproduct" element={<CreateProduct />} />          
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </BrowserRouter> 
    
    </div>
  );
}

export default App;
