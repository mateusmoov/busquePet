import { Header, Button, Section, Input } from "@/app/components";
import { UseFormRegister } from "react-hook-form";
import { DonorDataType } from "./Donor.types";

export const DonorPersonData = ({register, errors}) => {
  return (
      <main>
        <Section>
          <div className="flex min-h-[calc(100vh_-_10rem)] flex-col">
            <span className="mb-11 mt-6 font-header text-cyan-700 font-semibold text-lg flex justify-center">
              Seus Dados Pessoais
            </span>
            <div className="flex flex-col gap-y-5">
              <Input label="Seu Nome Completo" type="text" variant="donor" />
              <Input label="Data de nascimento" type="date" variant="donor" />
            </div>
          </div>
        </Section>
      </main>
  );
};

