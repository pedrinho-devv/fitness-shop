import { useEffect, useState, useContext } from "react";
import { ShopContext } from "../context/shopcontext";
import Title from "../components/Title";

const Cart = () => {
  const { products, currency, cartItems } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];

    // Iterar sobre os itens do carrinho corretamente
    Object.entries(cartItems).forEach(([itemId, sizes]) => {
      Object.entries(sizes).forEach(([size, quantity]) => {
        if (quantity > 0) {
          tempData.push({
            _id: itemId,
            size,
            quantity,
          });
        }
      });
    });

    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1="Seu" text2="Carrinho" />
      </div>
      <div>
        {cartData.length === 0 ? (
          <p className="text-gray-500 text-center mt-6">Seu carrinho está vazio.</p>
        ) : (
          cartData.map((item, index) => {
            const productData = products.find((products) => products._id === item._id);

            if (!productData) return null; // Evita erro caso o produto não seja encontrado

            return (
              <div
                key={index}
                className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
              >
                <div className="flex items-start gap-6">
                  <img src={productData.image?.[0]} className="w-16 sm:w-20" alt={productData.name} />
                  <div>
                    <p className="text-xs sm:text-lg font-medium">{productData.name}</p>
                    <p className="text-sm text-gray-500">Tamanho: {item.size}</p>
                    <p className="text-sm font-bold">
                      {item.quantity}x {currency} {productData.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Cart;
