import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/shopcontext";
import Title from "../components/Title";
import ProdutoItem from './ProdutoItem';

const ProdutosR = ({ category, subCategory }) => {
    const { products } = useContext(ShopContext);
    const [relacionado, setRelacionado] = useState([]);

    useEffect(() => {
        if (products.length > 0) {
            // Corrigi os filtros
            let productsCopia = products.slice();
            productsCopia = productsCopia.filter((item) => category === item.category);
            productsCopia = productsCopia.filter((item) => subCategory === item.subCategory);

            setRelacionado(productsCopia.slice(0, 5));
        }
    }, [products, category, subCategory]);

    return (
        <div className="my-20">
            <div className="text-center text-3xl py-2">
                <Title text1={"Produtos"} text2={"Relacionados"} />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {relacionado.map((item, index) => (
                    <ProdutoItem 
                        key={item._id} 
                        id={item._id} 
                        name={item.name} 
                        price={item.price} 
                        image={item.image} 
                    />
                ))}
            </div>
        </div>
    );
};

export default ProdutosR;
