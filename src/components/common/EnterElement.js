'use strict';
import styles from './EnterElement.module.css'

/**
 * Component to show an enter+label field
 * @param {labelText} param0 labelText contains the message for the field label. It is possible to pass all permitted html attributes to configure the input field 
 * @returns React.Component
 */
const EnterElement = ({ labelText, ...props }) => {
  return (
    <div className={styles.enterElementClass}>
      <label htmlFor='inputElement'>{labelText}</label>
      <input {...props} />
    </div>
  );
};

export default EnterElement;
