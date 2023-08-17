import { ReactNode } from "react";

interface ButtonProps { 
  children: ReactNode
}


export const Button = ({ children }: ButtonProps ) => {

  const variants = {
    primary: ''
  }

  return (
    <button className='rounded-lg bg-fuchsia-800 py-2 px-11 font-body flex'>
      {children}
    </button>
  );
};