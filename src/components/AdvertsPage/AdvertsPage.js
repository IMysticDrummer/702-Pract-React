'use strict';

import { useEffect, useState } from 'react';
import { getAdvertisements } from './service';
import classNames from 'classnames';
import styles from './AdvertsPage.module.css';
import Layout from '../Layout/Layout.js';

const AdvertsPage = () => {
  const [advertisements, setAdvertisements] = useState([]);

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

  const sectionClassName = classNames(styles.AdvertsPage, {
    [styles.empty]: !advertisements.length,
  });
  return (
    <Layout
      title='NODEPOP. Your second-hand sell/buy web'
      subTitle='Advertisements for you!'
    >
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
    </Layout>
  );
};

export default AdvertsPage;