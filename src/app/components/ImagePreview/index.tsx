import Image from "next/image"

 export const ImagePreview = () => {
  return (
    <div className="bg-zinc-50 border border-dashed border-zinc-400 w-fit rounded">
      <div className="px-4 py-4">
        <Image
          src="/icons/image.svg"
          alt="Icone de pré visualização de imagem"
          width="14"
          height="14"
        />
      </div>
    </div>
  );
}