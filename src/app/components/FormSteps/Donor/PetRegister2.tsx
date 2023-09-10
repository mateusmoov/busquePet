import {
  Header,
  Button,
  Section,
  FormGroup,
  RadioButton,
  Input,
  TextArea,
} from "@/app/components";
export const PetRegister2 = () => {
  return (
      <main>
        <Section>
          <div className="flex min-h-[100vh] flex-col gap-y-8">
            <div className="mt-7">
              <Input
                label="Qual o nome do seu bichinho?"
                placeholder="Nome do Bichinho"
                type="text"
                variant="donor"
                hint="Se não tiver nome, você pode criar um para o cadastro"
              />
            </div>
            <FormGroup
              label="O seu animalzinho já tem todas as vacinas?"
              variant="donor"
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
        </Section>
      </main>
  );
};