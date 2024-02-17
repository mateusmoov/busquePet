import {
  Header,
  FormGroup,
  RadioButton,
  Button,
  Section,
} from "@/app/components";

export const DonorPersonType = () => {
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
      <main>
        <Section>
          <div className="flex min-h-[calc(100vh_-_10rem)] flex-col">
            <span className="mb-11 mt-6 font-header text-cyan-700 font-semibold text-lg flex justify-center">
              Vamos começar!
            </span>
            <FormGroup label="Você é:" variant="donor" className="py-4">
              <div className="flex flex-col gap-y-4">
                <RadioButton label="Pessoa física" value="fisica" />
                <RadioButton label="Pessoa Jurídica (ONG)" value="fisica" />
              </div>
            </FormGroup>
          </div>
          <div className="flex justify-end mb-9">
            <Button
              variant="filled"
              icon="ArrowRight"
              className="bg-cyan-700 flex px-14 py-3 items-center font-medium text-whited"
              color="#FBFBFB"
            >
              Próximo
            </Button>
          </div>
        </Section>
      </main>
    </>
  );
};
