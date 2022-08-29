import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/cart";
import Home from "./pages/home";
import Login from "./pages/login";
import Product from "./pages/product";
import ProductList from "./pages/productList";
import Register from "./pages/register";



function App() {
  return( 
  <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/productList" element={<ProductList/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App;