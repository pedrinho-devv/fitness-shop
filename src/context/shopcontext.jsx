import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId, size) => {
        if (!size) {
            toast.error('Selecione o Tamanho do Produto!');
            return;
        }

        setCartItems((prevCart) => {
            const newCart = { ...prevCart };

            if (!newCart[itemId]) {
                newCart[itemId] = {};
            }

            newCart[itemId][size] = (newCart[itemId][size] || 0) + 1;

            return newCart;
        });
    };

    const updateCart = (itemId, size, newQuantity) => {
        setCartItems((prevCart) => {
            const newCart = { ...prevCart };

            if (newQuantity <= 0) {
                delete newCart[itemId][size];

                if (Object.keys(newCart[itemId]).length === 0) {
                    delete newCart[itemId];
                }
            } else {
                newCart[itemId][size] = newQuantity;
            }

            return newCart;
        });
    };

    const removeFromCart = (itemId, size) => {
        setCartItems((prevCart) => {
            const newCart = { ...prevCart };

            if (newCart[itemId]) {
                delete newCart[itemId][size];

                if (Object.keys(newCart[itemId]).length === 0) {
                    delete newCart[itemId];
                }
            }

            return newCart;
        });
    };

    const getTotalCartCount = () => {
        return Object.values(cartItems).reduce((total, sizes) => {
            return total + Object.values(sizes).reduce((sum, quantity) => sum + quantity, 0);
        }, 0);
    };

    const value = {
        products,
        currency: '$',
        delivery_fee: 10,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        updateCart,
        removeFromCart,
        getTotalCartCount
    };

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
