import Image from "next/image";

export const PetCard = () => {
  return (
    <div className="flex">
      <div>
        <Image
          width="192"
          height="136"
          src="/cachorro.png"
          alt="Pet"
        />
      </div>
      <div className="w-44 h-32 gap-y-3 bg-red-900">
        <div className="flex flex-col ml-4">
          <span>Melzinha</span>
          <span>1 - 3 meses</span>
          <div className="flex justify-between items-center">
            <Image width="49" height="22" src="/dog-m.png" alt="Pet" />
            <Image width="30" height="30" src="/femea.png" alt="Pet" />
          </div>
          <div className="flex">
            <Image width="6" height="10" src="/place.png" alt="Pet" />
            <span>Rio de Janeiro</span>
          </div>
        </div>
      </div>
    </div>
  );
}