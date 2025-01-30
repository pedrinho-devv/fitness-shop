import { assets } from "../assets/assets"

const Termos = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2  text-center py-20 text-xs md:text-base text-gray-700">
        <div>
            <img src={assets.exchange_icon} className="w-12 m-auto mb-5" alt="" />
            <p className="font-semibold">Nossos Termos</p>
            <p className="text-gray-400">Troca rápida e sem complicação para você.</p>
        </div>
        <div>
            <img src={assets.quality_icon} className="w-12 m-auto mb-5" alt="" />
            <p className="font-semibold">Garantia de 7 dias úteis.</p>
            <p className="text-gray-400">Compre com confiança!</p>
        </div>
        <div>
            <img src={assets.support_img} className="w-12 m-auto mb-5" alt="" />
            <p className="font-semibold">Suporte ao Cliente</p>
            <p className="text-gray-400">Fale conosco e teremos prazer em ajudar.</p>
        </div>
    </div>
  )
}

export default Termos