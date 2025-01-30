import { assets } from "../assets/assets";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col sm:grid sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm w-full max-w-7xl px-4">
        <div className="flex flex-col sm:items-start items-center">
          <img src={assets.vital_logo} className="w-40 mb-5" alt="Logo" />
          <p className="w-full md:w-2/3 text-gray-600 text-center sm:text-left">
          Transforme seu estilo com qualidade e confiança. Estamos aqui para fazer você brilhar!
          </p>
        </div>
        <div className="flex flex-col sm:items-start items-center">
          <p className="text-xl font-medium mb-5">Loja</p>
          <ul className="flex flex-col gap-1 text-gray-600 text-center sm:text-left">
            <li>Início</li>
            <li>Sobre Nós</li>
            <li>Coleção</li>
            <li>Novidades</li>
          </ul>
        </div>
        <div className="flex flex-col sm:items-start items-center">
          <p className="text-xl font-medium mb-5">Entre em Contato</p>
          <ul className="flex gap-4 text-gray-600 text-center sm:text-left">
          <li><FaFacebookSquare className="text-3xl transform hover:scale-110 transition-transform duration-200 ease-in-out" /></li>
            <li><FaInstagram className="text-3xl transform hover:scale-110 transition-transform duration-200 ease-in-out" /></li>
            <li><FaTiktok className="text-3xl transform hover:scale-110 transition-transform duration-200 ease-in-out" /></li>
            <li><FaWhatsapp className="text-3xl transform hover:scale-110 transition-transform duration-200 ease-in-out" /></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
