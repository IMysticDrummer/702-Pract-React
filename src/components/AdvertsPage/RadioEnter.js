import { Fragment } from 'react';

const RadioEnter = ({ label, name, values, value, onChange, ...props }) => {
  const RadioInputGroup = ({ values, checked }) => {
    return (
      <Fragment>
        {values.map((value) => {
          const { id, value: val, label } = value;
          return (
            <Fragment key={id}>
              <input
                type='radio'
                id={id}
                name={name}
                value={val}
                defaultChecked={val === checked}
              ></input>
              <label htmlFor={id}>{label}</label>
            </Fragment>
          );
        })}
      </Fragment>
    );
  };

  return (
    <fieldset>
      <legend>{label}</legend>
      <article onChange={onChange}>
        <RadioInputGroup
          values={values}
          checked={value}
        />
      </article>
    </fieldset>
  );
};

export default RadioEnter;