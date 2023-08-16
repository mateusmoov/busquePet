import { ReactNode } from "react"

interface ButtonStyleProps {
  variant: 'outlined'
  children: ReactNode
}

const variants = {
  outlined: ''
}


export const ButtonStyle = ({variant, children}: ButtonStyleProps) => {
  return (
      {children}
  )
}