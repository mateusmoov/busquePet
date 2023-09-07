import { Header, Button, Section, Input } from "../components";

const PersonDataAdopter = () => {
  return (
    <>
      <Header variant="adopter" icon>
        <div className="flex flex-col gap-x-2 ml-7 py-4">
          <span className="font-header text-white text-xl font-semibold">
            Você quer adoar!
          </span>
          <span className="font-header text-white text-sm">
            Vai ser bem rapidinho!
          </span>
        </div>
      </Header>
      <main>
        <Section>
          <div className="flex min-h-[calc(100vh_-_10rem)] flex-col">
            <span className="mb-11 mt-6 font-header text-fuchsia-800 font-semibold text-lg flex justify-center">
              Seus Dados Pessoais
            </span>
            <div className="flex flex-col gap-y-5">
              <Input label="Seu Nome Completo" type="text" variant="donor" />
              <Input label="Sua idade" type="number" variant="donor" />
              <Input label="Seu E-mail" type="email" variant="donor" />
              <Input label="Crie uma senha" type="password" variant="donor" />
              <Input
                togglePasswordVisibility
                label="Confirme sua senha"
                type="password"
                variant="donor"
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
    </>
  );
};

export default PersonDataAdopter;
