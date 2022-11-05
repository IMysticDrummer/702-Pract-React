import styles from './EnterElement.module.css';
import classNames from 'classnames';

/**
 * Component to show an enter+label field
 * @param {labelText} param0 labelText contains the message for the field label. It is possible to pass all permitted html attributes to configure the input field
 * @returns React.Component
 */
const EnterElement = ({ labelText, className, value, ...props }) => {
  const element = () => {
    if (props.type !== 'file') {
      return (
        <input
          value={value || ''}
          {...props}
        />
      );
    } else {
      return <input {...props} />;
    }
  };
  return (
    <div className={classNames(styles.enterElementClass, className)}>
      <label htmlFor='inputElement'>{labelText}</label>
      {element()}
    </div>
  );
};

export default EnterElement;
