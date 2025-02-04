import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/shopcontext";
import { assets } from "../assets/assets";

const Produtos = () => {
  const { produtosId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [produtosData, setProdutosData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    if (products && products.length > 0) {
      const foundProduct = products.find(
        (item) => item._id.trim() === String(produtosId).trim()
      );
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
            {produtosData.image &&
            Array.isArray(produtosData.image) &&
            produtosData.image.length > 0 ? (
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
              <img
                key={i}
                src={assets.star_icon}
                alt="Star"
                className="w-3.5"
              />
            ))}
            <img src={assets.star_dull_icon} className="w-3.5" alt="star" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {produtosData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {produtosData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p className=""> Selecione o Tamanho</p>
            <div className="flex gap-2">
              {produtosData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 hover:bg-gray-700 transition-all ease-in-out hover:text-white ${
                    item === size ? "border-black" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 rounded-md">
            Adicionar ao Carrinho
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>Produto 100% original.</p>
            <p>Delivery disponível para este produto.</p>
            <p>Devolução em até 7 dias úteis.</p>
          </div>
        </div>
      </div>
      {/*DESCRIÇÃO E REVIEWS */}
      <div className="mt-20 ">
        <div className="flex">
          <b className="border px-5 py-3 text-sm ">Descrição</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            Um site de e-commerce é uma plataforma online que facilita a compra
            e venda de produtos ou serviços pela internet. Ele serve como um
            mercado virtual onde empresas e indivíduos podem exibir seus
            produtos, interagir com os clientes e realizar transações sem a
            necessidade de presença física. Os sites de e-commerce ganharam
            imensa popularidade devido à sua conveniência, acessibilidade e ao
            alcance global que oferecem. Os sites de e-commerce geralmente
            exibem produtos ou serviços juntamente com descrições detalhadas,
            imagens, preços e quaisquer variações disponíveis (por exemplo,
            tamanhos, cores). Cada produto costuma ter sua própria página
            dedicada com informações relevantes.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Produtos;
