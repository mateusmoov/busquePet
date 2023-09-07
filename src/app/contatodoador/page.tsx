"use client"

import { Input, Header, Button, Section } from "../components";

const PersonContact = () => {
  return (
    <>
      <Header variant="donor" icon>
        <div className="flex flex-col gap-x-2 ml-7 py-4">
          <span className="font-header text-white text-xl font-semibold">
            Você quer doar!
          </span>
          <span className="font-header text-white text-sm">
            Só mais um pouquinho, certo?!
          </span>
        </div>
      </Header>
      <main>
        <Section>
          <div className="flex min-h-[calc(100vh_-_10rem)] flex-col">
            <span className="mb-11 mt-6 font-header text-cyan-700 font-semibold text-lg flex justify-center">
              Seus Dados para Contato
            </span>
            <div className="flex flex-col gap-y-5">
              <Input
                label="Seu número"
                type="number"
                variant="donor"
                placeholder="(xx) 9 9999-9999"
              />
              <Input
                label="Seu e-mail"
                type="email"
                variant="donor"
                placeholder="exemplo@email.com"
              />
              <Input
                label="Repita seu e-mail"
                type="email"
                variant="donor"
                placeholder="exemplo@email.com"
              />
              <Input
                togglePasswordVisibility
                label="Crie uma senha"
                type="password"
                variant="donor"
                placeholder="********"
              />
              <Input
                togglePasswordVisibility
                label="Repita a sua senha"
                type="password"
                variant="donor"
                placeholder="********"
              />
            </div>
          </div>
          <div className="flex justify-end mb-9">
            <Button
              variant="filled"
              icon="arrowRight"
              className="bg-cyan-700 flex px-14 py-3 items-center font-medium"
            >
              Próximo
            </Button>
          </div>
        </Section>
      </main>
    </>
  );
};

export default PersonContact;
