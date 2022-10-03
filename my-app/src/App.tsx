import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AuthContextProvider from './context/AuthContext';


import AppRouter from './router/Approuter';

function App() {
 
  
  return (
    <div className="App">
      
        <AuthContextProvider>
          <BrowserRouter>
        <AppRouter />
        </BrowserRouter>
        </AuthContextProvider>  
        
  
     
      


    
    </div>
  );
}

export default App;
