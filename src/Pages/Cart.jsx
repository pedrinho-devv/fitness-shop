import { useEffect, useState, useContext } from "react";
import { ShopContext } from "../context/shopcontext";
import { Trash, Plus, Minus } from "lucide-react";
import Title from "../components/Title";

const Cart = () => {
  const { products, currency, cartItems, updateCart, removeFromCart } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];

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
            const productData = products.find((product) => product._id === item._id);
            if (!productData) return null;

            return (
              <div
                key={index}
                className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_1fr_1fr_1fr] sm:grid-cols-[4fr_1fr_1fr_1fr] items-center gap-4"
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
                <div className="flex items-center justify-center gap-2">
                  <button onClick={() => updateCart(item._id, item.size, item.quantity - 1)} className="p-2 bg-gray-200 rounded">
                    <Minus size={16} />
                  </button>
                  <span className="text-lg font-medium">{item.quantity}</span>
                  <button onClick={() => updateCart(item._id, item.size, item.quantity + 1)} className="p-2 bg-gray-200 rounded">
                    <Plus size={16} />
                  </button>
                </div>
                <button onClick={() => removeFromCart(item._id, item.size)} className="text-red-500 hover:text-red-700">
                  <Trash size={20} />
                </button>
              </div>
            );
          })
        )}
      </div>
      {cartData.length > 0 && (
        <div className="flex justify-end mt-6">
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Finalizar Compra</button>
        </div>
      )}
    </div>
  );
};

export default Cart;