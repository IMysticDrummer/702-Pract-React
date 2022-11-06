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
      <button
        name='yes'
        onClick={handleResponse}
      >
        Yes
      </button>
      <button
        name='no'
        onClick={handleResponse}
      >
        NO
      </button>
    </section>
  );
};

export default ConfirmElement;
