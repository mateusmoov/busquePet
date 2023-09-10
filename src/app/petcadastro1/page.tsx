import { ageRanges } from "@/utils/age";
import { Header, Button, Section, FormGroup, RadioButton, Select } from "../components";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

type DonorRegisterStep1Data = {
  type: "cachorro" | "gato";
  gender: "macho" | "femea";
  size: "pequeno" | "medio" | "grande";
  ageRange: string;
};

const donorRegisterStep1Schema = z.object({
  type: z.string().nonempty("O tipo do pet é obrigatório"),
  gender: z.string().nonempty("O genero do pet é obrigatório"),
  size: z.string().nonempty("O porte do pet é obrigatório"),
  ageRange: z.string().nonempty("A idade do pet é obrigatória"),
});

const DonorRegisterStep1 = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<DonorRegisterStep1Data>({
    resolver: zodResolver(donorRegisterStep1Schema),
  });

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
              <FormGroup label="Seu pet é um:" variant="donor" className="py-4">
                <div className="flex flex-col gap-y-4">
                  <RadioButton label="Cachorro" value="cachorro" />
                  <RadioButton label="Gato" value="gato" />
                </div>
              </FormGroup>
            </div>
            <div>
              <FormGroup
                label="O gênero do seu bichinho é:"
                variant="donor"
                className="py-4"
              >
                <div className="flex flex-col gap-y-4">
                  <RadioButton label="Fêmea" value="femea" />
                  <RadioButton label="Macho" value="macho" />
                </div>
              </FormGroup>
            </div>
            <FormGroup
              label="Qual o porte do bichinho?"
              variant="donor"
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
              variant="donor"
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

export default DonorRegisterStep1;
