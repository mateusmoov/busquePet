"use client";

import { useState } from "react";
import { ImagePreview, ImagePreviewProps } from "../ImagePreview";
import Image from "next/image";

export const ImageUpload = () => {
  const [image, setImage] = useState<ImagePreviewProps[]>([
    {
      src: "/icons/image.svg",
      imageFromUser: false,
    },
    {
      src: "/icons/image.svg",
      imageFromUser: false,
    },
    {
      src: "/icons/image.svg",
      imageFromUser: false,
    },
    {
      src: "/icons/image.svg",
      imageFromUser: false,
    },
    {
      src: "/icons/image.svg",
      imageFromUser: false,
    },
  ]);

  const handleUpdateImage = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const updatedImage = [...image];
    updatedImage[index] = {
      src: URL.createObjectURL(event.target.files![0]),
      imageFromUser: true,
    };
    setImage(updatedImage);
  };

  const handleRemoveImage = (index: number) => {
    const updatedImage = [...image];
    updatedImage[index] = {
      src: "/icons/image.svg",
      imageFromUser: false,
    };
    setImage(updatedImage);
  };

  return (
    <div className="flex items-center flex-col gap-y-4">
      <div className="flex">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center h-64 border border-zinc-400 border-dashed rounded-lg cursor-pointer"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6 px-4">
            <Image
              alt="Adicione uma foto"
              src="/icons/camera.svg"
              width="55"
              height="55"
            />
            <p className="mb-2 text-sm text-gray-500 text-center dark:text-gray-400">
              <span className="font-semibold">Arraste ou clique aqui</span> para
              adicionar uma imagem
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              PNG ou JPG (MAX. 800x400px)
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            accept="image/*"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              image.forEach((item, index) => {
                if (!item.imageFromUser) {
                  handleUpdateImage(event, index);
                }
              });
            }}
          />
        </label>
      </div>
      <div className="flex gap-x-2 flex-row-reverse">
        {image.map((image, index) => (
          <ImagePreview
            onCloseClick={() => handleRemoveImage(index)}
            src={image.src}
            imageFromUser={image.imageFromUser}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
