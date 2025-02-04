import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/shopcontext";
import { assets } from "../assets/assets";

const Produtos = () => {
  const { produtosId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [produtosData, setProdutosData] = useState(null);
  const [image, setImage] = useState("");

  useEffect(() => {
    if (products && products.length > 0) {
      const foundProduct = products.find((item) => item._id.trim() === String(produtosId).trim());
      if (foundProduct) {
        setProdutosData(foundProduct);
        setImage(foundProduct.image?.[0] || "");
      }
    }
  }, [produtosId, products]);

  if (!produtosData) return <div>Carregando...</div>;

  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* DADOS DOS PRODUTOS */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* IMAGENS DOS PRODUTOS */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {produtosData.image && Array.isArray(produtosData.image) && produtosData.image.length > 0 ? (
              produtosData.image.map((item, index) => (
                <img
                  onClick={() => setImage(item)}
                  src={item}
                  key={index}
                  className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                  alt=""
                />
              ))
            ) : (
              <p>Nenhuma imagem disponível</p>
            )}
          </div>
          <div className="w-full sm:w-[80%]">
            {image ? (
              <img src={image} alt="" className="w-full h-auto" />
            ) : (
              <p>Imagem não disponível</p>
            )}
          </div>
        </div>
        {/* INFORMAÇÕES DO PRODUTO */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{produtosData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <img key={i} src={assets.star_icon} alt="Star" className="w-3.5" />
            ))}
            <img src={assets.star_dull_icon} className="w-3.5" alt="star" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">{currency}{produtosData.price}</p>
        <p className="mt-5 text-gray-500 md:w-4/5">{produtosData.description}</p>
        <div className="flex flex-col gap-4 my-8">
          <p className=""> Selecione o Tamanho</p>
          <div className="flex gap-2">
            {produtosData.sizes.map((item, index)=>(
              <button className={`border py-2 px-4 bg-gray-100 hover:bg-gray-700 transition-all ease-in-out hover:text-white`} key={index}>{item}</button>
            ))}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Produtos;
