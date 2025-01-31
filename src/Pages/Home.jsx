import Colecao from "../components/Colecao.jsx";
import Hero from "../components/Hero";
import Bestsellers from "../components/Bestsellers.jsx";
import Termos from "../components/Termos.jsx";



const Home = () => {
  return (
    <div>
      <Hero />
      <Colecao />
      <Bestsellers />
      <Termos/>
    </div>
  );
};

export default Home;
