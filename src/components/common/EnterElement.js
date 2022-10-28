'use strict';

const EnterElement = ({ labelText, ...props }) => {
  return (
    <div className='enterElementClass'>
      <label htmlFor='inputElement'>{labelText}</label>
      <input {...props} />
    </div>
  );
};

export default EnterElement;
