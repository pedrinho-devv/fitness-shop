import { assets } from "../assets/assets";
import Title from "../components/Title";

const Contato = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"Fale"} text2={"Conosco"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16 ">
        <img
          src={assets.contact_img}
          className="w-full md:max-w-[450px]"
          alt="Contato"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Entre em contato conosco para dúvidas, sugestões ou suporte. Nossa equipe está disponível para te atender da melhor forma possível.
          </p>
          <p>
            Você pode nos encontrar através do e-mail, telefone ou redes sociais. Estamos prontos para te ajudar!
          </p>
        </div>
      </div>
      <div className="text-4xl py-4">
        <Title text1={'Entre em'} text2={'Contato'} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>E-mail</b>
          <p className="text-gray-600">contato@vitalmodas.com</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Telefone</b>
          <p className="text-gray-600">(11) 99999-9999</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Localização</b>
          <p className="text-gray-600">Rua: W555. CEP-00000-000 Pedro II, PI.</p>
        </div>
      </div>
    </div>
  );
};

export default Contato;
