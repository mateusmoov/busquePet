import Image from "next/image";
import { Button, Section } from "../components";

export const SucessRegister = () => {
  return (
    <main className="flex items-center justify-center h-screen">
      <Section>
        <div className="flex flex-col items-center gap-y-8 min-h-[calc(100vh_-_12rem)]">
          <span className="font-body text-2xl text-black text-center font-semibold">
            Seu perfil foi cadastrado com sucesso!
          </span>
          <Image
            src="/logos/busquepet_logo.svg"
            alt="Logo do Busque Pet"
            width="375"
            height="300"
          />
          <span className="font-body text-2xl text-black text-center font-semibold">
            Agora, vamos cadastrar seu animalzinho?
          </span>
        </div>
        <div className="flex justify-between">
          <Button
            className=" border-fuchsia-800 text-fuchsia-800 py-3 px-12 font-medium"
            variant="outlined"
            icon="arrowRight"
          >
            Pular
          </Button>
          <Button
            className="py-3 px-12 bg-cyan-700 text-white font-medium"
            variant="filled"
            icon="arrowRight"
          >
            Vamos
          </Button>
        </div>
      </Section>
    </main>
  );
};

export default SucessRegister;
