import { twMerge } from "tailwind-merge";

type SelectItemProps = {
  value: string;
  name: string;
};

type SelectProps = {
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
  donor: {
    label: "text-fuchsia-800",
    select: "border-fuchsia-800",
  },
  adopter: {
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
    <>
      <label
        className={twMerge(variants[variant].label, "block")}
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
          "text-black font-body py-3 rounded-xl border-2 block"
        )}
      >
        {selectItems.map((item, index: number) => (
          <option key={index} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </>
  );
};