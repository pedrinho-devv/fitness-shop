import { useContext } from "react";
import { ShopContext } from "../context/shopcontext";
import { assets } from "../assets/assets";

const Search = () => {
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);

    return showSearch ? (
        <div className="border-t border-b bg-gray-50 text-center flex justify-center items-center py-3">
            <div className="inline-flex items-center justify-center border border-gray-400 px-5 mx-5 py-2 rounded-full w-full">
                <input 
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)} 
                    type="text" 
                    placeholder="Pesquisar..." 
                    className="flex-1 outline-none bg-inherit text-sm px-2"
                />
                <img className="w-4 cursor-pointer" src={assets.search_icon} alt="Pesquisar" />
            </div>
            <img 
                onClick={() => setShowSearch(false)} 
                src={assets.cross_icon} 
                className="inline w-4 cursor-pointer ml-2" 
                alt="Fechar"
            />
        </div>
    ) : null;
};

export default Search;
