import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

type SelectItemProps = {
  value: string;
  name: string;
};

type SelectProps = ComponentPropsWithoutRef<'select'> & {
  label: string;
  variant: VariantProps;
  selectItems: SelectItemProps[];
  onChangeValue?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

type VariantsProps = {
  label: string;
  select: string;
};

type VariantProps = keyof typeof variants;

const variants = {
  adopter: {
    label: "text-fuchsia-800",
    select: "border-fuchsia-800",
  },
  donor: {
    label: "text-cyan-700",
    select: "border-cyan-700",
  },
} satisfies Record<string, VariantsProps>;

export const Select = ({
  label,
variant,
  selectItems,
  onChangeValue,
}: SelectProps) => {
  return (
    <div className="flex flex-col">
      <label
        className={twMerge(
          variants[variant].label,
          "flex flex-col text-xs mb-2 font-body"
        )}
        htmlFor={label}
      >
        {label}
      </label>
      <select
        id={label}
        name="select"
        onChange={onChangeValue}
        className={twMerge(
          variants[variant].select,
          "text-black font-body py-3 rounded-xl border block pl-2 pr-2 bg-white"
        )}
      >
        {selectItems.map((item, index: number) => (
          <option key={index} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};
