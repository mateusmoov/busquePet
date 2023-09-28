import Image from "next/image";

export const PetCard = () => {
  return (
    <div className="flex w-full max-h-[136px]">
      <Image
        width="192"
        height="136"
        src="/cachorro.jpg"
        alt="Pet"
        className="rounded-l-lg"
      />
      <div className="w-full p-1 rounded-r-lg border border-neutral-200 border-l-0">
        <div className="flex flex-col ml-4 gap-y-1 align-center">
          <span className="font-body text-fuchsia-800 font-semibold">
            Aquiles
          </span>
          <span className="font-body text-zinc-800">1 - 3 meses</span>
          <div className="flex justify-between items-center">
            <Image width="49" height="22" src="/dog-g.svg" alt="Porte do Animal" />
            <Image width="30" height="30" src="/macho.svg" alt="Genero do Animal" />
          </div>
          <div className="flex align-baseline">
            <Image width="6" height="10" src="/place.svg" alt="Localização" className="mr-2" />
            <span className="font-body text-xs">Riacho Fundo - Brasilia</span>
          </div>
        </div>
      </div>
    </div>
  );
}