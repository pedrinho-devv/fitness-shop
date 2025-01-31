import { useContext } from "react"
import { ShopContext } from "../context/shopcontext"
import { assets } from "../assets/assets"

const Colecao = () => {

  const { products} = useContext(ShopContext)
  const [showFilter, setShowFilter] = useState(false)
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">

    {/*FILTRO DE OPÇÕES */}
    <div className="min-w-60">
      <p className="my-2 text-2xl flex items-center cursor-pointer gap-2">FILTROS
        <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : '' }`} src={assets.dropdown_icon} alt="" />
      </p>
      {/*FILTROS CATEGORIAS */}
      <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
        <p className="my-3 text-sm font-medium">CATEGORIAS</p>
        <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
          <p className="flex gap-2 ">
            <input className="w-3 " type="checkbox" value={'Homem'}/>Homem
          </p>
          <p className="flex gap-2 ">
            <input className="w-3 " type="checkbox" value={'Mulher'}/>Mulher
          </p>
        </div>
      </div>
      {/*SUBCATEGORIAS */}
      <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
        <p className="my-3 text-sm font-medium">TIPOS</p>
        <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
          <p className="flex gap-2 ">
            <input className="w-3 " type="checkbox" value={'Tops'}/>Tops
          </p>
          <p className="flex gap-2 ">
            <input className="w-3 " type="checkbox" value={'Legs'}/>Legs
          </p>
          <p className="flex gap-2 ">
            <input className="w-3 " type="checkbox" value={'Blusas'}/>Blusas
          </p>
          <p className="flex gap-2 ">
            <input className="w-3 " type="checkbox" value={'Shorts'}/>Shorts
          </p>
        </div>
      </div>

    </div>

      
    </div>
  )
}

export default Colecao
