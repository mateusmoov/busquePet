import Image from "next/image";
import { Button, Section } from "@/app/components";

export const SuccessRegister = () => {
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
      </Section>
    </main>
  );
};
