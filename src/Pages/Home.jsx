import Colecao from "../components/Colecao";
import Hero from "../components/Hero";
import Bestsellers from "../components/Bestsellers";
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
