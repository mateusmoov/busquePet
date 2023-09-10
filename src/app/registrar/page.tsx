"use client";

import { FormEvent } from "react";
import {
  DonorContactData,
  DonorPersonData,
  DonorLocationData,
  SuccessRegister,
  PetRegister1,
  PetRegister2,
  PetSelectImage,
} from "../components/FormSteps";
import { useMultiStepForm } from "@/hooks/useMultiStepForm";
import { Button, Section, Header } from "../components";

const RegisterSteps = () => {
  const { step, currentStepIndex, next, back } = useMultiStepForm([
    <DonorContactData key="contact" />,
    <DonorPersonData key="person" />,
    <DonorLocationData key="location" />,
    <SuccessRegister key="success" />,
    <PetRegister1 key="pet1" />,
    <PetRegister2 key="pet2" />,
    <PetSelectImage key="image" />,
  ]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    next();
  };

  return (
    <>
      <Header variant="donor" icon handleBackClick={back}>
        <div className="flex flex-col gap-x-2 ml-7 py-4">
          <span className="font-header text-white text-xl font-semibold">
            Você quer doar!
          </span>
          <span className="font-header text-white text-sm">
            Só mais um pouquinho, certo?!
          </span>
        </div>
      </Header>
    <form onSubmit={onSubmit}>
      <Section>
        {step}
        <div className="flex justify-end mb-9">
          <Button
            variant="filled"
            icon="arrowRight"
            className="bg-cyan-700 flex px-14 py-3 items-center font-medium"
          >
            Próximo
          </Button>
        </div>
      </Section>
    </form>
    </>
  );
};

export default RegisterSteps;
