import { ComponentPropsWithRef } from "react";

type RadioButtonProps = ComponentPropsWithRef<"input"> & {
  label: string;
  value: string;
  onChangeValue?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const RadioButton = ({ label, onChangeValue, value, ...rest }: RadioButtonProps) => {
  return (
    <>
      <label className="text-sm font-body mb-2 flex items-center text-neutral-600 gap-x-2">
        <input
          type="radio"
          onChange={onChangeValue}
          value={value}
          className="w-5 h-5 accent-pink-500"
          {...rest}
        />
        {label}
      </label>
    </>
  );
};
