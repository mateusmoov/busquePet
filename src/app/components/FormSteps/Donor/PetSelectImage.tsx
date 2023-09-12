"use client";
import { Header, Button, Section, ImageUpload } from "@/app/components";

export const PetSelectImage = ({ register, errors }) => {
  return (
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
      </Section>
    </main>
  );
};
