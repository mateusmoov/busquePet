type SelectItemProps = {
  value: string
  name: string
}

type SelectProps = {
  label: string
  selectItems: SelectItemProps[];
  onChangeValue: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};


export const Select = ({label, selectItems, onChangeValue }: SelectProps) => {
  return (
    <>
      <label htmlFor="">{label}</label>
      <select name="select" onChange={onChangeValue}>
        {selectItems.map((item, index: number) => (
          <option key={index} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </>
  );
};