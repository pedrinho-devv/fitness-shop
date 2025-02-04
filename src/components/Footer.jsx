import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col sm:grid sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm w-full max-w-7xl px-4">
        <div className="flex flex-col sm:items-start items-center">
          <img src={assets.vital_logo} className="w-40 mb-5" alt="Logo" />
          <p className="w-full md:w-2/3 text-gray-600 text-center sm:text-left">
            Transforme seu estilo com qualidade e confiança. Estamos aqui para fazer você brilhar!
          </p>
        </div>
        <div className="flex flex-col sm:items-start items-center">
          <p className="text-xl font-medium mb-5">Loja</p>
          <NavLink>
          <ul className="flex flex-col gap-1 text-gray-600 text-center sm:text-left">
            <li className="cursor-pointer hover:text-gray-800" to='/Home'>Início</li>
            <li className="cursor-pointer hover:text-gray-800" to='/News'>Coleção</li>
            <li className="cursor-pointer hover:text-gray-800" to='/Sobre'>Sobre Nós</li>
            <li className="cursor-pointer hover:text-gray-800" to='/Contato'>Contato</li>
          </ul>
          </NavLink>
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
      {/* Seção de Copyright fixa abaixo */}
      <div className="w-full text-center">
        <hr className="border-gray-300 w-full" />
        <p className="py-5 text-sm text-gray-600">
          © {new Date().getFullYear()} Pedrinho.Dev. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
};

export default Footer;
