import { Header, FormGroup, RadioButton, Button, Section } from "../components"

const PersonType = () => {
  return (
    <>
      <Header variant="donor" icon>
        <div className="flex flex-col gap-x-2 ml-7 py-4">
          <span className="font-header text-white text-xl font-semibold">
            Você quer doar!
          </span>
          <span className="font-header text-white text-sm">Vamos lá!</span>
        </div>
      </Header>
      <main className="relative">
        <Section>
          <span className="mb-11 mt-6 font-header text-cyan-700 font-semibold text-lg flex justify-center">
            Vamos começar!
          </span>
          <FormGroup label="Você é:" variant="adopter" className="py-4">
            <div className="flex flex-col gap-y-4">
              <RadioButton label="Pessoa física" value="fisica" />
              <RadioButton label="Pessoa Jurídica (ONG)" value="fisica" />
            </div>
          </FormGroup>
          <div className="flex flex-col justify-end items-end">
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
}

export default PersonType