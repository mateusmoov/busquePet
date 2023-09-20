import { Header, Button, Section, Input } from "@/app/components";

export const AdopterContactData = () => {
  return (
      <main>
        <Section>
          <div className="flex min-h-[calc(100vh_-_10rem)] flex-col">
            <span className="mb-11 mt-6 font-header text-fuchsia-800 font-semibold text-lg flex justify-center">
              Seus Dados Pessoais
            </span>
            <div className="flex flex-col gap-y-5">
              <Input label="Seu Nome Completo" type="text" variant="adopter" />
              <Input label="Sua idade" type="number" variant="adopter" />
              <Input label="Seu E-mail" type="email" variant="adopter" />
              <Input label="Crie uma senha" type="password" variant="adopter" />
              <Input
                togglePasswordVisibility
                label="Confirme sua senha"
                type="password"
                variant="adopter"
              />
            </div>
          </div>
          <div className="flex justify-end mb-9">
            <Button
              variant="filled"
              icon="arrowRight"
              className="bg-fuchsia-800 flex px-14 py-3 items-center font-medium text-white"
            >
              Próximo
            </Button>
          </div>
        </Section>
      </main>
  );
};

