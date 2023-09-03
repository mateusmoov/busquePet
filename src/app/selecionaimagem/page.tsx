"use client"

import Image from "next/image";
import { ImagePreview } from "../components";
import React, { useState } from "react";
import { ImagePreviewProps } from "../components/ImagePreview";

const ImageSelection = () => {
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
  
  return (
    <>
      <div className="flex items-center flex-col">
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
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Arraste ou clique aqui</span>{" "}
                para adicionar uma imagem
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                PNG ou JPG (MAX. 800x400px)
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
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
        <div className="flex gap-x-2">
          {image.map((image, index) => (
            <ImagePreview
              src={image.src}
              imageFromUser={image.imageFromUser}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageSelection;
