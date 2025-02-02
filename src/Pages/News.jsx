import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/shopcontext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProdutoItem from "../components/ProdutoItem";

const News = () => {
  const { products } = useContext(ShopContext);
  const [mostrarFiltro, setMostrarFiltro] = useState(false);
  const [produtosFiltrados, setProdutosFiltrados] = useState(products || []);
  const [categoria, setCategoria] = useState([]);
  const [subCategoria, setSubCategoria] = useState([]);
  const [filtroPreco, setFiltroPreco] = useState("");

  const alternarCategoria = (e) => {
    const value = e.target.value;
    setCategoria((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const alternarSubCategoria = (e) => {
    const value = e.target.value;
    setSubCategoria((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const aplicarFiltroPreco = (produtos) => {
    if (filtroPreco === "Até 40") {
      return produtos.filter((item) => item.price <= 40);
    } else if (filtroPreco === "Até 100") {
      return produtos.filter((item) => item.price <= 100);
    } else if (filtroPreco === "Até 200") {
      return produtos.filter((item) => item.price <= 200);
    }
    return produtos;
  };

  useEffect(() => {
    let produtosCopia = [...products];

    if (categoria.length > 0) {
      produtosCopia = produtosCopia.filter((item) => categoria.includes(item.categoria));
    }

    if (subCategoria.length > 0) {
      produtosCopia = produtosCopia.filter((item) => subCategoria.includes(item.tipo));
    }

    produtosCopia = aplicarFiltroPreco(produtosCopia);
    setProdutosFiltrados(produtosCopia);
  }, [categoria, subCategoria, filtroPreco, products]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Seção de Filtros */}
      <div className="min-w-60">
        <p onClick={() => setMostrarFiltro(!mostrarFiltro)} className="my-2 text-2xl flex items-center cursor-pointer gap-2">
          FILTROS
          <img className={`h-3 sm:hidden ${mostrarFiltro ? "rotate-90" : ""}`} src={assets.dropdown_icon} alt="" />
        </p>
        {/* Filtro de Categorias */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${mostrarFiltro ? "" : "hidden"} sm:block`}>
          <p className="my-3 text-sm font-medium">CATEGORIAS</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex gap-2">
              <input className="w-3" type="checkbox" value="Men" onChange={alternarCategoria} />
              Homem
            </label>
            <label className="flex gap-2">
              <input className="w-3" type="checkbox" value="Women" onChange={alternarCategoria} />
              Mulher
            </label>
          </div>
        </div>
        {/* Filtro de Subcategorias */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${mostrarFiltro ? "" : "hidden"} sm:block`}>
          <p className="my-3 text-sm font-medium">TIPOS</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex gap-2">
              <input className="w-3" type="checkbox" value="Tops" onChange={alternarSubCategoria} />
              Tops
            </label>
            <label className="flex gap-2">
              <input className="w-3" type="checkbox" value="Legs" onChange={alternarSubCategoria} />
              Legs
            </label>
            <label className="flex gap-2">
              <input className="w-3" type="checkbox" value="Blusas" onChange={alternarSubCategoria} />
              Blusas
            </label>
            <label className="flex gap-2">
              <input className="w-3" type="checkbox" value="Shorts" onChange={alternarSubCategoria} />
              Shorts
            </label>
          </div>
        </div>
      </div>
      {/* Seção de Produtos */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"TODAS AS"} text2={"COLEÇÕES"} />
          <select
            className="border-2 border-gray-300 text-sm px-2"
            value={filtroPreco}
            onChange={(e) => setFiltroPreco(e.target.value)}
          >
            <option value="">Todos os preços</option>
            <option value="Até 40">R$: Até 40</option>
            <option value="Até 100">R$: Até 100</option>
            <option value="Até 200">R$: Até 200</option>
          </select>
        </div>
        {/* Lista de Produtos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {produtosFiltrados && produtosFiltrados.map((item) => (
            <ProdutoItem key={item._id} name={item.name} id={item._id} image={item.image} price={item.price} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;