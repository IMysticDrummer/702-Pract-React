'use strict';

import { useEffect, useState } from 'react';
import { getAdvertisements } from './service';
import classNames from 'classnames';
import styles from './AdvertsPage.module.css';

// const advertisements2 = [
//   {
//     id: 1,
//     name: 'Banana pocha',
//     sale: true,
//     tags: ['lifestyle'],
//     price: 2,
//     photo: '',
//   },
//   {
//     id: 2,
//     name: 'Moto en miniatura',
//     sale: false,
//     tags: ['motor'],
//     price: 200,
//     photo: '',
//   },
// ];

const AdvertsPage = () => {
  const [advertisements, setAdvertisements] = useState([]);
  //useEffect(()=>{setAdvertisements(advertisements2)},[])

  useEffect(() => {
    const getAds = async () => {
      let adsList;
      try {
        adsList = await getAdvertisements();
        setAdvertisements(adsList);
      } catch (error) {
        console.log('');
      }
    };
    getAds();
  }, []);

  const sectionClassName = classNames(styles.AdvertsPage, {[styles.empty]: !advertisements.length})
  return (
    <section className={sectionClassName}>
      <ul>
        {advertisements.length ? (
          advertisements.map((ad) => (
            <li key={ad.id}>
              {ad.name}, {ad.sale ? 'Vendo' : 'Compro'}, {ad.price},
              {ad.tags.map((tag) => (
                <p
                  key={tag}
                  className='tagParagraph'
                >
                  {tag}
                </p>
              ))}
            </li>
          ))
        ) : (
          <button>Crea tu primer anuncio</button>
        )}
      </ul>
    </section>
  );
};

export default AdvertsPage;
