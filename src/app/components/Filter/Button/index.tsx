import { forwardRef } from "react";
import { Icon, IconName } from "../../Icon";

interface ButtonFilterProps {
  label: string;
  icon: IconName;
  variant: "inline" | "column";
  value: string;
}

export const ButtonFilter = forwardRef<HTMLInputElement, ButtonFilterProps>(
  ({ label, icon, variant, value, ...rest }, ref) => {
        const uniqueId = `${label}-${Math.random().toString(36).substr(2, 9)}`;
    return (
      <>
        <input
          type="checkbox"
          id={uniqueId}
          value={value}
          className="hidden peer"
          {...rest}
          ref={ref}
        />
        <label
          htmlFor={uniqueId}
          className="flex justify-center items-center w-28 p-3 text-gray-500 bg-white border-2 border-gray-200 rounded-2xl cursor-pointer peer-checked:bg-fuchsia-300  dark:peer-checked:text-fuchsia-800 peer-checked:text-gray-600 "
        >
          <div
            className={
              variant === "column"
                ? "flex flex-col gap-y-1 items-center"
                : "flex gap-y-1 items-center gap-x-2"
            }
          >
            <Icon icon={icon} />
            <span className="font-header text-xs font-semibold">{label}</span>
          </div>
        </label>
      </>
    );
  }
);

ButtonFilter.displayName = "buttonfilter";
