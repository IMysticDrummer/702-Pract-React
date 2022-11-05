import { useState } from 'react';
import EnterElement from '../common/EnterElement.js';
import Page from '../Layout/Page.js';
import { postNewAd } from './service.js';

const NewAdvertPage = ({ subTitle }) => {
  // const [name, setName] = useState('');
  // const [sale, setSale] = useState(true);
  // const [price, setPrice] = useState('0');
  // const [tags, setTags] = useState([]);
  // const [photo, setPhoto] = useState('');

  const [form, setForm] = useState({
    name: null,
    sale: true,
    price: 0,
    tags: null,
    photo: '',
  });

  const enterElementHandleChange = (event) => {
    if (event.target.name === 'name') {
      //setName(event.target.value);
      setForm({ ...form, [event.target.name]: event.target.value });
    }
    if (event.target.name === 'sale') {
      //setSale(event.target.checked);
      setForm({ ...form, [event.target.name]: event.target.checked });
    }
    if (event.target.name === 'price') {
      //setPrice(event.target.value);
      setForm({ ...form, [event.target.name]: event.target.value });
    }
    if (event.target.name === 'tags') {
      //setTags(event.target.value);
      setForm({ ...form, [event.target.name]: event.target.value });
    }
    if (event.target.name === 'photo') {
      //console.log(event.target);
      //setPhoto(event.target.files[0]);
      setForm({ ...form, [event.target.name]: event.target.files[0] });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('sale', form.sale);
    formData.append('price', form.price);
    formData.append('tags', form.tags);
    formData.append('photo', form.photo);

    try {
      //      setError(null);
      //      setIsFetching(true);
      //const response = await postNewAd({ name, sale, price, tags, photo });
      const response = await postNewAd(formData);
      console.log(`response= ${response.id}`);
      //      onLogin();
      //      const to = location.state?.from?.pathname || '/';
      //      navigate(to, { replace: true });
    } catch (error) {
      console.log(error);
      //      setError(error);
    }
    //    setIsFetching(false);
  };

  return (
    <Page subTitle={subTitle}>
      <span>Esto es new advert page</span>
      <form
        id='newAdForm'
        onSubmit={handleSubmit}
      >
        <EnterElement
          labelText='Name'
          type='input'
          name='name'
          onChange={enterElementHandleChange}
          value={form.name}
        />
        <EnterElement
          labelText='Sale'
          type='checkbox'
          name='sale'
          onChange={enterElementHandleChange}
          checked={form.sale}
        />
        <EnterElement
          labelText='Price'
          type='number'
          name='price'
          onChange={enterElementHandleChange}
          value={form.price}
        />
        <EnterElement
          labelText='Tags'
          type='input'
          name='tags'
          onChange={enterElementHandleChange}
          value={form.tags}
        />
        <EnterElement
          labelText='Photo'
          type='file'
          name='photo'
          onChange={enterElementHandleChange}
        />
        <button type='submit'>Lanzar</button>
      </form>
    </Page>
  );
};

export default NewAdvertPage;
