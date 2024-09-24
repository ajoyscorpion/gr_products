import './App.css';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from './Pages/productDetails';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/productDetails/:id' element={<ProductDetails/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
