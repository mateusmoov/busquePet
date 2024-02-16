'use client'
import React, { ChangeEvent, FC } from 'react';

export const CheckboxFilter: FC = ({label}) => {
  const [isChecked, setIsChecked] = React.useState(false);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id="myCheckbox"
        className="peer accent-pink-400 w-4 h-4"
        checked={isChecked}
        onChange={handleOnChange}
      />
      <label
        htmlFor="myCheckbox"
        className='cursor-pointer select-none text-stone-300 peer-checked:text-cyan-700 font-header font-medium ml-1 text-sm'
      >
        Click me
      </label>
    </div>
  );
};

