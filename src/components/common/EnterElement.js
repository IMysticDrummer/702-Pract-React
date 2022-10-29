'use strict';
import styles from './EnterElement.module.css';
import classNames from 'classnames';

/**
 * Component to show an enter+label field
 * @param {labelText} param0 labelText contains the message for the field label. It is possible to pass all permitted html attributes to configure the input field
 * @returns React.Component
 */
const EnterElement = ({ labelText, className, value, ...props }) => {
  return (
    <div className={classNames(styles.enterElementClass, className)}>
      <label htmlFor='inputElement'>{labelText}</label>
      <input value={value || ''} {...props} />
    </div>
  );
};

export default EnterElement;
