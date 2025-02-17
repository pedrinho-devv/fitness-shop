import { Routes, Route } from "react-router-dom";
import Home from "../src/Pages/Home";
import Sobre from "../src/Pages/Sobre";
import Contato from "../src/Pages/Contato";
import Produtos from "../src/Pages/Produtos";
import Cart from "../src/Pages/Cart";
import Login from "../src/Pages/Login";
import PlaceOrder from "../src/Pages/PlaceOrder";
import Order from "../src/Pages/Order";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import News from "./Pages/News.jsx";
import Search from "./components/Search.jsx";
import { ToastContainer} from 'react-toastify';




const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer/>
      <Navbar/>
      <Search/>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/News" element={<News/>} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/produtos/:produtosId" element={<Produtos />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/finalizar-pedido" element={<PlaceOrder />} />
        <Route path="/pedido" element={<Order />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
