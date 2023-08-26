import Image from "next/image";
import { Section, Button } from "../components";

export const SignIn = () => {
  return (
    <main>
      <Section>
        <h1>Cadastre-se</h1>
        <div>
          <Image
            src="/cat_tea.svg"
            alt="Gato segurando uma chaleira"
            width="220"
            height="220"
          />
          <h2>Como você quer se cadastrar?</h2>
        </div>
        <div>
          <Button variant="filled">
            <span>Cadastrar como adotante</span>
            <span>Quero um bicho para dar amor e um lar digno.</span>
          </Button>
          <Button variant="filled">
            <span>Cadastrar-me como doador</span>
            <span>Quero doar para que bichinho tenha um lar digno.</span>
          </Button>
        </div>
      </Section>
    </main>
  );
};
