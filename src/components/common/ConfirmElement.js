import { Button } from './Button';

const ConfirmElement = ({ message, response }) => {
  const handleResponse = (event) => {
    event.preventDefault();
    if (event.target.name === 'yes') response(true);
    if (event.target.name === 'no') response(false);
  };
  return (
    <section>
      <h3>¡¡¡WARNING!!!</h3>
      <p>{message}</p>
      <p>Are you completely sure??!!</p>

      <Button
        name='yes'
        onClick={handleResponse}
      >
        Yes
      </Button>
      <Button
        name='no'
        onClick={handleResponse}
      >
        NO
      </Button>
    </section>
  );
};

export default ConfirmElement;
