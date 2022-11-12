import styles from './EnterElement.module.css';

/*
  key solution applied after consulting stackoverflow.
  When I clicked in the checkbox the state changed, but the element was not re-rendered.
  So I had to give the component a ramdom key to make React re-render the component.
 */

const CheckElement = ({ labelText, name, checked, onChange, ...props }) => {
  return (
    <article className={styles.enterElementClass}>
      <label htmlFor='checkItem'>{labelText}</label>
      <input
        type='checkbox'
        id='checkItem'
        name={name}
        value=''
        key={Math.random()}
        checked={checked}
        onChange={onChange}
        {...props}
      />
    </article>
  );
};

export default CheckElement;
