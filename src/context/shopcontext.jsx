import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItens, setCartItens] = useState({})


    const addToCart = async (itemId, size) => {

        if(!size){
            toast.error('Selecione o Tamanho do Produto!')
            return
        }

        let cartData = estrutura(cartItens)

        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId] [size] += 1
            }else{
                cartData[itemId][size] = 1
            }
        }else{
            cartData[itemId] = {}
            cartData[itemId][size] = 1
        }
        setCartItens(cartData)
    }

    const addCart = () => {
        let totalContagem = 0
        for(const items in cartItens){
            for(const item in cartItens[items]){
                try{
                    if(cartItens[items][item] > 0){
                        totalContagem += cartItens[items][item]

                    }
                }catch(error){
                
                }
            }
        }
        return totalContagem
    }

    const value = {
        products,
        currency: '$',
        delivery_fee: 10,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItens,
        addToCart,
        addCart
    };
    

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
