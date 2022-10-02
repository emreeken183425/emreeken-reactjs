import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Category from './pages/Category';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';

function App() {
 
  
  return (
    <div className="App">
      
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/ProductDetail" element={<ProductDetail />} />          
        </Routes>
                
      </BrowserRouter>

    </div>
  );
}

export default App;
