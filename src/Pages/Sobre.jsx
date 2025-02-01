import { assets } from "../assets/assets";
import Title from "../components/Title";

const Sobre = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"Sobre"} text2={"Nós"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16 ">
        <img
          src={assets.about_img}
          className="w-full md:max-w-[450px]"
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            A Vital Modas nasceu da paixão por estilo, conforto e performance.
            Nosso objetivo é proporcionar peças que unem tecnologia, design e
            funcionalidade para quem busca performance na academia e estilo no
            dia a dia.
          </p>
          <p>
            Trabalhamos com uma seleção cuidadosa de roupas fitness masculinas e
            femininas, garantindo tecidos de alta qualidade, conforto e
            durabilidade. Cada peça é desenvolvida para oferecer movimento
            livre, ajuste perfeito e resistência, acompanhando você em cada
            treino e desafio.
          </p>
          <p>
            Seja para musculação, corrida, yoga ou até mesmo para o dia a dia, a
            Vital Modas traz coleções que combinam tendências modernas e
            tecnologia têxtil, garantindo que você esteja sempre no seu melhor,
            dentro e fora da academia. Vista-se com Vitalidade. <br /> <br /> <span className="text-gray-800">Vista-se com
            Vital Modas!</span> 
          </p>
        </div>
      </div>
      <div className="text-4xl py-4">
        <Title text1={'Por que'} text2={'Escolher a gente?'}/>
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col ga-5">
          <b>Qualidade e Durabilidade</b>
          <p className="text-gray-600">Peças feitas com tecidos tecnológicos para máximo conforto e resistência.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col ga-5">
          <b>Estilo e Versatilidadee</b>
          <p className="text-gray-600">Designs modernos que combinam com seus treinos e o dia a dia.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col ga-5">
          <b>Conforto e Performance</b>
          <p  className="text-gray-600">Modelagem ergonômica para liberdade de movimento e alto desempenho.</p>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
