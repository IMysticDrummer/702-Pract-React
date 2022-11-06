import { Fragment, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ConfirmElement from '../common/ConfirmElement.js';
import ErrorElement from '../common/ErrorElement.js';
import Page from '../Layout/Page.js';
import { eraseAd, getAdById } from './service.js';

const AdvertPage = ({ subTitle }) => {
  const [advertisement, setAdvertisement] = useState({ tags: [] });
  const [error, setError] = useState(null);
  const [erase, setErase] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getAd = async (id) => {
      let advert;
      try {
        advert = await getAdById(id);
        setAdvertisement(advert);
      } catch (error) {
        console.log(error);
        error.status === 404 ? navigate('/404') : setError(error);
      }
    };
    getAd(id);
  }, [id, navigate]);

  const resetError = () => setError(null);

  const handleEraseAdClick = (event) => {
    event.preventDefault();
    setErase(true);
  };

  const eraseAdResponse = async (eraseResponse) => {
    if (eraseResponse) {
      try {
        await eraseAd(id);
        navigate('/');
      } catch (error) {
        setError(error);
        setErase(false);
      }
    } else {
      setErase(false);
    }
  };

  return (
    <Page subTitle={subTitle}>
      <section>
        {error && (
          <ErrorElement
            error={error}
            altMessage="Something's wrong retrieving data from server"
            handleErrorMessageClick={resetError}
          />
        )}
        {erase && (
          <ConfirmElement
            message="You're about to erase this advertisement"
            response={eraseAdResponse}
          />
        )}
        <Fragment>
          <p>Id: {advertisement.id}</p>
          <p>Created: {advertisement.createdAt}</p>
          <p>Product: {advertisement.name}</p>
          <p>Price: {advertisement.price}</p>
          <p>{advertisement.sale ? 'Sell' : 'Buy'}</p>
          <p>
            Tags:
            {<Fragment> {advertisement.tags.join(' - ')}</Fragment>}
          </p>
          <p>Photo: </p>
          {!advertisement.photo ? (
            <label>NO PHOTO AVIABLE</label>
          ) : (
            <img
              src={advertisement.photo || ''}
              alt={advertisement.name}
            />
          )}
          <button
            name='eraseAd'
            onClick={handleEraseAdClick}>
            Erase Advertisement
          </button>
        </Fragment>
      </section>
    </Page>
  );
};

export default AdvertPage;
