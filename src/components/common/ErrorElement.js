import styles from './ErrorElement.module.css';

const ErrorElement = ({ error, altMessage, handleErrorMessageClick }) => {
  if (error) {
    return (
      <section
        className={styles.errorMessageClass}
        onClick={handleErrorMessageClick}
      >
        {error.message}
        {-error.status || altMessage}
        <p></p>
        <p>Click in this message to continue</p>
      </section>
    );
  }
};

export default ErrorElement;
