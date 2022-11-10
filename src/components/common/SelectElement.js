import { Fragment } from 'react';
import { Button } from './Button';

const SelectElement = ({
  label,
  name,
  value,
  multiple,
  options,
  onChange,
  handleReset,
  ...props
}) => {
  const optionsList = (options) => {
    return (
      <Fragment>
        {options.map((optionElement) => {
          return (
            <option
              key={optionElement}
              value={optionElement}
            >
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
        onChange={onChange}
      >
        {optionsList(options)}
      </select>
      {handleReset && (
        <Button
          name='reset'
          onClick={handleReset}
        >
          reset tags
        </Button>
      )}
    </Fragment>
  );
};

export default SelectElement;
