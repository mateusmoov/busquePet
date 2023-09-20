import { brazilStates } from "@/utils/stateBrazil";
import { Header, Button, Section, Input, Select } from "@/app/components";

export const AdopterLocationData = () => {
  return (
      
      <main>
        <Section>
          <div className="flex min-h-[calc(100vh_-_10rem)] flex-col">
            <span className="mb-11 mt-6 font-header text-fuchsia-800 font-semibold text-lg flex justify-center">
              Seus Dados para Contato
            </span>
            <div className="flex flex-col gap-y-5">
              <Input
                label="Seu CEP"
                type="number"
                variant="donor"
                placeholder="00000-000"
              />
              <Select
                selectItems={brazilStates}
                label="Seu e-mail"
                variant="donor"
              />
              <Input label="Sua Cidade" type="text" variant="donor" />
              <Input
                label="Seu Endereço"
                type="text"
                variant="donor"
                placeholder="Ex.: Rua dos Bichinhos Felizes"
              />
              <Input label="Seu Bairro" type="text" variant="donor" />
            </div>
          </div>
          <div className="flex justify-end mb-9">
            <Button
              variant="filled"
              icon="arrowRight"
              className="bg-fuchsia-800 text-white flex px-14 py-3 items-center font-medium"
            >
              Próximo
            </Button>
          </div>
        </Section>
      </main>
  );
};

