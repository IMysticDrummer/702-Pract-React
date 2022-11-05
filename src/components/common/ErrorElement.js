import styles from './ErrorElement.module.css';

const ErrorElement = ({ error, altMessage, handleErrorMessageClick }) => {
  if (error) {
    return (
      <div
        className={styles.errorMessageClass}
        onClick={handleErrorMessageClick}
      >
        {error.message}
        {-error.status || altMessage}
      </div>
    );
  }
};

export default ErrorElement;
