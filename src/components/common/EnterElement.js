'use strict';

const EnterElement = ({ labelText, ...props }) => {
  return (
    <div className='enterElementClass'>
      <label for='inputElement'>{labelText}</label>
      <input {...props} />
    </div>
  );
};

export default EnterElement;
