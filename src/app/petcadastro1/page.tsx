import { ageRanges } from "@/utils/age";
import { Header, Button, Section, FormGroup, RadioButton, Select } from "../components";
const PetRegister1 = () => {
  return (
    <>
      <Header variant="donor" icon>
        <div className="flex flex-col gap-x-2 ml-7 py-4">
          <span className="font-header text-white text-xl font-semibold">
            Vamos ajudar o bichinho a encontrar um lar de amor?!
          </span>
        </div>
      </Header>
      <main>
        <Section>
          <div className="flex min-h-[100vh] flex-col gap-y-8">
            <div className="mt-7">
              <FormGroup
                label="Seu pet é um:"
                variant="adopter"
                className="py-4"
              >
                <div className="flex flex-col gap-y-4">
                  <RadioButton label="Cachorro" value="cachorro" />
                  <RadioButton label="Gato" value="gato" />
                </div>
              </FormGroup>
            </div>
            <FormGroup
              label="O gênero do seu bichinho é:"
              variant="adopter"
              className="py-4"
            >
              <div className="flex flex-col gap-y-4">
                <RadioButton label="Fêmea" value="femea" />
                <RadioButton label="Macho" value="macho" />
              </div>
            </FormGroup>
            <FormGroup
              label="Qual o porte do bichinho?"
              variant="adopter"
              className="py-4"
            >
              <div className="flex flex-col gap-y-4">
                <RadioButton label="Pequeno" value="pequeno" />
                <RadioButton label="Médio" value="medio" />
                <RadioButton label="Grande" value="grande" />
              </div>
            </FormGroup>
            <Select
              label="Qual a idade do seu bichinho?"
              variant="adopter"
              selectItems={ageRanges}
            />
          </div>
          <div className="flex justify-end mb-9">
            <Button
              variant="filled"
              icon="arrowRight"
              className="bg-cyan-700 flex px-14 py-3 items-center font-medium text-white"
            >
              Próximo
            </Button>
          </div>
        </Section>
      </main>
    </>
  );
};

export default PetRegister1;
