import React, { ChangeEvent, forwardRef } from "react";

interface CheckboxFilterType {
  label: string;
  value: string;
}

export const CheckboxFilter = forwardRef<HTMLInputElement, CheckboxFilterType>(
  ({ label, value, ...rest }, ref) => {


    return (
      <div className="flex items-center">
        <input
          type="checkbox"
          id={label}
          value={value}
          className="peer accent-pink-400 w-4 h-4"
          {...rest}
          ref={ref}
        />
        <label
          htmlFor={label}
          className="cursor-pointer select-none text-stone-300 peer-checked:text-cyan-700 font-header font-medium ml-1 text-sm"
        >
          {label}
        </label>
      </div>
    );
  }
);

CheckboxFilter.displayName = "checkboxfilter";
