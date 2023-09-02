"use client"

import Image from "next/image"

 export const ImagePreview = () => {
  return (
    <>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={(e: any) =>
          console.log(URL.createObjectURL(e?.target?.files[0]))
        }
      />
      <div className="bg-zinc-50 border border-dashed border-zinc-400 w-fit rounded relative">
        <div className="absolute -top-3 -right-1">
          <button>
            <Image
              src="/icons/close.svg"
              alt="Apagar imagem"
              width="10"
              height="10"
            />
          </button>
        </div>
        <div className="px-4 py-4">
          <Image
            src="/icons/image.svg"
            alt="Icone de pré visualização de imagem"
            width="14"
            height="14"
          />
        </div>
      </div>
    </>
  );
}