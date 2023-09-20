"use client";

import {
  AdopterContactData,
  AdopterLocationData
} from "../components/FormSteps";
import { useMultiStepForm } from "@/hooks/useMultiStepForm";
import { Button, Section, Header } from "../components";
import { registerStepsSchema } from "@/utils/zodSchemas";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const RegisterSteps = () => {
  const { step, next, back, currentStepIndex } = useMultiStepForm([
    <AdopterContactData key="contact" />,
    <AdopterLocationData key="location" />,
  ]);


  const currentValidationSchema = registerStepsSchema[currentStepIndex];

  const methods = useForm({
    resolver: zodResolver(currentValidationSchema),
  });

  const { trigger } = methods;

  const onSubmit = (values: any) => {
    console.log(values);
  };

  const handleNext = async (event: any) => {
    event.preventDefault();
    const isStepValid = await trigger();
    if (isStepValid) next();
  };

  return (
    <>
      <Header
        variant="adopter"
        icon
        handleBackClick={back}
      >
        <div className="flex flex-col gap-x-2 ml-7 py-4">
          <span className="font-header text-white text-xl font-semibold">
            Você quer adotar!
          </span>
          <span className="font-header text-white text-sm">
            Só mais um pouquinho, certo?!
          </span>
        </div>
      </Header>
      <Section>
        <FormProvider {...methods}>
          <form>
            {step}
            <div className="flex justify-end mb-9">
              <Button
                variant="filled"
                icon="arrowRight"
                className="bg-fuchsia-800 flex px-14 py-3 items-center font-medium text-white"
                onClick={(event: any) => handleNext(event)}
              >
                Próximo
              </Button>
            </div>
          </form>
        </FormProvider>
      </Section>
    </>
  );
};

export default RegisterSteps;
