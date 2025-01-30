import { useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

  const [visible, setVisible] = useState(false)


  return (
    <div className="flex items-center justify-between py-7 font-medium">
      {/* Logo */}
      <img src={assets.vital_logo} className="w-36" alt="logo" />

      {/* Links de navegação */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink
          to="/home"
          className="relative flex flex-col items-center gap-1 text-gray-700 hover:text-gray-900 after:content-[''] after:w-2/4 after:h-[2px] after:bg-gray-700 after:absolute after:bottom-[-3px] after:left-1/2 after:-translate-x-1/2 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
        >
          Início
        </NavLink>

        <NavLink
          to="/coleção"
          className="relative flex flex-col items-center gap-1 text-gray-700 hover:text-gray-900 after:content-[''] after:w-2/4 after:h-[2px] after:bg-gray-700 after:absolute after:bottom-[-3px] after:left-1/2 after:-translate-x-1/2 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
        >
          Coleção
        </NavLink>

        <NavLink
          to="/sobre"
          className="relative flex flex-col items-center gap-1 text-gray-700 hover:text-gray-900 after:content-[''] after:w-2/4 after:h-[2px] after:bg-gray-700 after:absolute after:bottom-[-3px] after:left-1/2 after:-translate-x-1/2 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
        >
          Sobre Nós
        </NavLink>

        <NavLink
          to="/contato"
          className="relative flex flex-col items-center gap-1 text-gray-700 hover:text-gray-900 after:content-[''] after:w-2/4 after:h-[2px] after:bg-gray-700 after:absolute after:bottom-[-3px] after:left-1/2 after:-translate-x-1/2 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
        >
          Contato
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img src={assets.search_icon} className="w-5 cursor-pointer" alt="" />

        <div className="group relative">
          <img
            src={assets.profile_icon}
            className="
        w-5 cursor-pointer"
            alt=""
          />

          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col ga-2 w-36 py-3 px-5 bg-slate-100 rounded"> 
              <p className="cursor-pointer text-slate-500 hover:text-black"> Minha Conta</p>
              <p className="cursor-pointer text-slate-500 hover:text-black"> Pedidos</p>
              <p className="cursor-pointer text-slate-500  hover:text-black"> Logout</p>
            </div>
          </div>
        </div>
        <Link to='/cart' className="relative">
        <img src={assets.cart_icon} className="w-5 cursor-pointer min-w-5" alt="" />
        <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">1</p>
        </Link>
        <img onClick={() => setVisible(true)} src={assets.menu_icon} className="w-5 cursor-pointer sm:hidden" alt="" />
      </div>
      {/*SIDEBAR MENU MBILEs*/}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className="flex flex-col text-gray-600">
          <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3">
            <img src={assets.dropdown_icon} className="h-5 rotate-180" alt="" />
            <p>Voltar</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to='/Home'>Inicio</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to='/Colecao'>Coleção</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to='/Produtos'>Produtos</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to='/Contato'>Contato</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
