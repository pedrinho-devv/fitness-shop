import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/shopcontext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProdutoItem from "../components/ProdutoItem";

const News = () => {
  const { products, search, showSearch} = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortTypes, setSortTypes] = useState("Até 40");

  const toggleCategoria = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const toggleSubCategoria = (e) => {
    const value = e.target.value;
    setSubCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const applyFilter = () => {
    let filtered = [...products];

    if(showSearch && search){
      filtered = filtered.filter((item=> item.name.toLowerCase().includes(search.toLowerCase())))

    }

    if (category.length > 0) {
      filtered = filtered.filter((item) => category.includes(item.category));
    }
    if (subCategory.length > 0) {
      filtered = filtered.filter((item) => subCategory.includes(item.subCategory));
    }

    switch (sortTypes) {
      case "Até 40":
        filtered = filtered.filter((item) => item.price <= 40);
        break;
      case "Até 100":
        filtered = filtered.filter((item) => item.price <= 100);
        break;
      case "Até 200":
        filtered = filtered.filter((item) => item.price <= 200);
        break;
      default:
        break;
    }

    setFilterProducts(filtered);
  };

  useEffect(() => {
    applyFilter();
  }, [products, category, subCategory, sortTypes, search, showSearch]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-2xl flex items-center cursor-pointer gap-2"
        >
          FILTROS
          <img
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>

        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? "" : "hidden"} sm:block`}>
          <p className="my-3 text-sm font-medium">CATEGORIAS</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2 ">
              <input className="w-3" type="checkbox" value="Men" onChange={toggleCategoria} /> Homem
            </p>
            <p className="flex gap-2 ">
              <input className="w-3" type="checkbox" value="Women" onChange={toggleCategoria} /> Mulher
            </p>
          </div>
        </div>

        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}>
          <p className="my-3 text-sm font-medium">TIPOS</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2 ">
              <input className="w-3" type="checkbox" value="Topwear" onChange={toggleSubCategoria} /> Tops
            </p>
            <p className="flex gap-2 ">
              <input className="w-3" type="checkbox" value="Bottomwear" onChange={toggleSubCategoria} /> Legs
            </p>
            <p className="flex gap-2 ">
              <input className="w-3" type="checkbox" value="Blusas" onChange={toggleSubCategoria} /> Blusas
            </p>
            <p className="flex gap-2 ">
              <input className="w-3" type="checkbox" value="Shorts" onChange={toggleSubCategoria} /> Shorts
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"TODAS AS"} text2={"COLEÇÕES"} />
          <select
            onChange={(e) => setSortTypes(e.target.value)}
            className="border-2 border-gray-300 text-sm px-2"
          >
            <option value="Até 40"> R$:Até 40</option>
            <option value="Até 100">R$:Até 100</option>
            <option value="Até 200">R$:Até 200</option>
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProdutoItem key={index} name={item.name} id={item._id} image={item.image} price={item.price} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;