import { ageRanges } from "@/utils/age";
import { Header, Button, Section, FormGroup, RadioButton, Select, Input, TextArea } from "../components";
const PetRegister2 = () => {
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
              <Input
                label="Qual o nome do seu bichinho?"
                placeholder="Nome do Bichinho"
                type="text"
                variant="adopter"
                hint="Se não tiver nome, você pode criar um para o cadastro"
              />
            </div>
            <FormGroup
              label="O seu animalzinho já tem todas as vacinas?"
              variant="adopter"
              className="py-4"
            >
              <div className="flex flex-col gap-y-4">
                <RadioButton
                  label="Sim, todas as vacinas necessárias"
                  value="todasVacinas"
                />
                <RadioButton
                  label="Não, não tomou as vacinas"
                  value="naoVacinas"
                />
                <RadioButton
                  label="Apenas algumas vacinas"
                  value="algumasVacinas"
                />
                <RadioButton label="Não sei" value="naosabe" />
              </div>
            </FormGroup>
            <TextArea
              label="Conta um pouco sobre o animalzinho:"
              placeholder="Conta pra gente a história do seu bichinho, porque você quer doar, ou como o encontrou, como o pet é no dia a dia."
              className="h-64 resize-none"
              hint="Esta mensagem ficará na descrição sobre o pet.
Você poderá editá-la depois."
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

export default PetRegister2;
