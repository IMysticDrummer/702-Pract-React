import { Fragment } from 'react';

const SelectElement = ({
  label,
  name,
  value,
  multiple,
  options,
  onChange,
  ...props
}) => {
  const optionsList = (options) => {
    return (
      <Fragment>
        {options.map((optionElement) => {
          return (
            <option
              key={optionElement}
              value={optionElement}>
              {optionElement}
            </option>
          );
        })}
      </Fragment>
    );
  };

  return (
    <Fragment>
      <label htmlFor='selectElement'>{label}</label>
      <select
        name={name}
        id='selectElement'
        value={value}
        multiple={multiple}
        onChange={onChange}>
        {optionsList(options)}
      </select>
    </Fragment>
  );
};

export default SelectElement;
