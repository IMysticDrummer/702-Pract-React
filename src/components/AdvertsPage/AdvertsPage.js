import { useEffect, useState } from 'react';
import { getAdvertisements } from './service';
import classNames from 'classnames';
import styles from './AdvertsPage.module.css';
import Layout from '../Layout/Layout.js';

/**
 * Advertisement component.
 * Recives the title and subtitle of the page.
 * Recives if the user is logged.
 * Recives a function to manage the onLogout event
 * @param {title:string, subtitle:string, isLogged:boolean, onLogout:function, className:string} param0 
 * @returns React.Component
 */
const AdvertsPage = ({title, subtitle, isLogged, onLogout, className}) => {
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

  const sectionClassName = classNames(styles.AdvertsPage, className, {
    [styles.empty]: !advertisements.length,
  });
  return (
    <Layout
      title={title}
      subTitle={subtitle}
      isLogged={isLogged}
      onLogout={onLogout}
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
