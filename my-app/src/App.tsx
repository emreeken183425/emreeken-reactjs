import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Category from './pages/Category';
import CreateProduct from './pages/CreateProduct';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductDetail from './pages/ProductDetail';
import Register from './pages/Register';

function App() {
 
  
  return (
    <div className="App">
      
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
