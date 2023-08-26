import Image from "next/image";
import { Section, Button } from "../components";

export const SignIn = () => {
  return (
    <main className="flex items-center justify-center h-screen relative">
      <Section>
        <h1 className="font-body text-4xl font-semibold">Cadastre-se</h1>
        <div className="mb-10 flex flex-col items-center">
          <Image
            src="/cat_tea.svg"
            alt="Gato segurando uma chaleira"
            width="220"
            height="220"
          />
          <h2 className="font-body text-lg font-semibold mb-7">
            Como você quer se cadastrar?
          </h2>
        </div>
        <div className="flex flex-col gap-y-6 text-white">
          <Button
            variant="filled"
            className="bg-fuchsia-800  px-5 py-4"
            icon="arrowRight"
          >
            <div className="flex flex-col text-start">
              <span className="mb-2 font-semibold">
                Cadastrar como adotante
              </span>
              <span>Quero um bicho para dar amor e um lar digno.</span>
            </div>
          </Button>
          <Button
            variant="filled"
            className="bg-cyan-700 px-5 py-4"
            icon="arrowRight"
          >
            <div className="flex flex-col text-start">
              <span className="mb-2 font-semibold">
                Cadastrar-me como doador
              </span>
              <span>Quero doar para que bichinho tenha um lar digno.</span>
            </div>
          </Button>
        </div>
      </Section>
      <div className="absolute bottom-0 left-0 transform rotate-173.242 origin-bottom-left">
        <Image src="/blob.svg" alt="bolha lateral" width="200" height="250" />
      </div>
    </main>
  );
};


export default SignIn;
