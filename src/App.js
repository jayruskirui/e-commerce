
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Shop from './Pages/Shop';
import Loginsignup from './Pages/Loginsignup';
import Cart from './Pages/Cart.jsx';
import Product from './Pages/Product';
import ShopCategory from './Pages/ShopCategory';
import Footer from './Components/Footer/Footer.jsx';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';
 
function App() {
  return (
  <div>
    <BrowserRouter>
     <Navbar/>
     <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/Mens' element={<ShopCategory banner={men_banner} category="Mens"/>}/>
        <Route path='/Womens' element={<ShopCategory banner={women_banner} category="Womens"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kids"/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/product/:id' element={<Product/>}/>
      
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/loginsignup' element={<Loginsignup/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>  
  </div>
  );
}

export default App;
