import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './component/home';
import Product_veg from './component/Product_veg';
import Product_fruit from './component/Product_fruit';
import Login from './component/login';
import Register from './component/register';
import React from 'react';

import AboutUs from './component/AboutUs';

  function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/> 
      <Route path='/register' element={<Register/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/product' element={<Product_veg/>}/>
      <Route path='/product_f' element={<Product_fruit/>}/>

      
    </Routes>
    </BrowserRouter>

       
  );
}

export default App;
