import React from "react";
import { HTMLProps } from "react";
import { Button } from "../Button";

type ModalType = {
  title: string;
  subtitle: string;
  buttonText: string;
  type: "success" | "info" | "error";
};

export const Modal = ({ title, subtitle, buttonText, type }: ModalType) => {
  const buttonStyle = {
    error: "",
    info: "outline-cyan-600 text-cyan-600",
    success: "",
  } satisfies Record<string, string>;

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex flex-col items-center justify-center p-12 border-b text-center">
              <h1 className="text-3xl font-semibold font-body text-cyan-600">
                {title}
              </h1>
              <p className="font-header text-sm">
                {subtitle}
              </p>
              <Button variant="outlined" className={buttonStyle[type]}>
                {buttonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};
