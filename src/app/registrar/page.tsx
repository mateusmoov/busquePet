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
import { RegisterStepsSchema } from "@/utils/zodSchemas";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const RegisterSteps = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(currentValidationSchema),
  });

  const { step, next, back, currentStepIndex } = useMultiStepForm([
    <DonorPersonData register={register} errors={errors} key="person" />,
    <DonorContactData register={register} errors={errors} key="contact" />,
    <DonorLocationData register={register} errors={errors} key="location" />,
    <SuccessRegister key="success" />,
    <PetRegister1 register={register} errors={errors} key="pet1" />,
    <PetRegister2 register={register} errors={errors} key="pet2" />,
    <PetSelectImage register={register} errors={errors} key="image" />,
  ]);

  const currentValidationSchema = RegisterStepsSchema[currentStepIndex];

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
