import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type VariantsProps = {
  label: string;
  input: string;
};

type RadioButtonProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  variant: VariantProps;
  value: string;
  onChangeValue?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

type VariantProps = keyof typeof variants;

const variants = {
  donor: {
    label: "text-fuchsia-800",
    input: "",
  },
  adopter: {
    label: "text-cyan-700",
    input: "",
  },
} satisfies Record<string, VariantsProps>;

export const RadioButton = ({ label, variant, onChangeValue, value, ...rest }: RadioButtonProps) => {
  return (
    <>
      <label>
        <input
          type="radio"
          onChange={onChangeValue}
          value={value}
          className={twMerge(
            variants[variant].input,
            "w-10 h-10 checked:bg-red-700"
          )}
          {...rest}
        />
        {label}
      </label>
    </>
  );
};
