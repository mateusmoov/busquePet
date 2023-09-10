"use client";
import { Header, Button, Section, ImageUpload } from "@/app/components";

export const PetSelectImage = () => {
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
          <div className="flex min-h-[calc(100vh_-_10rem)] flex-col">
            <div className="flex flex-col gap-y-2">
              <span className="mt-6 font-header text-black text-xs text-center flex justify-center">
                As fotos fazem toda a diferença para o bichinho conseguir um lar
                que vai dar amor para ele.
              </span>
              <span className="mb-11 font-header text-black text-xs text-center flex justify-center">
                quanto mais foto melhor! ❤
              </span>
            </div>
            <ImageUpload />
          </div>
          <div className="flex justify-end mb-9">
            <Button
              variant="filled"
              icon="arrowRight"
              className="bg-cyan-700  text-white flex px-14 py-3 items-center font-medium"
            >
              Próximo
            </Button>
          </div>
        </Section>
      </main>
    </>
  );
};

