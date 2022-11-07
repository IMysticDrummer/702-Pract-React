import { useEffect, useState } from 'react';
import { getAdvertisements } from './service';
import classNames from 'classnames';
import styles from './AdvertsPage.module.css';
import { Link } from 'react-router-dom';
import Page from '../Layout/Page';
import FiltersAdsElement from './FiltersAdsElement';

/**
 * Advertisement component.
 * Recives the title and subTitle of the page.
 * Recives if the user is logged.
 * Recives a function to manage the onLogout event
 * @param {title:string, subTitle:string, isLogged:boolean, onLogout:function, className:string} param0
 * @returns React.Component
 */
const AdvertsPage = ({ title, subTitle, isLogged, onLogout, className }) => {
  const [advertisements, setAdvertisements] = useState([]);
  const [filteredAds, setFilteredAds] = useState([]);
  const [filters, setFilters] = useState({ tags: [] });

  const options = ['lifestyle', 'work', 'mobile', 'motor'];

  const handleFilters = (filtersSelected) => {
    setFilters(filtersSelected);
  };

  useEffect(() => {
    const getAds = async () => {
      let adsList;
      try {
        adsList = await getAdvertisements();
        setAdvertisements(adsList);
        filteringAds();
      } catch (error) {
        console.log('fallo AdvertsPage useEffect');
      }
    };

    const filteringAds = async () => {
      let filteredAdsList;
      try {
        filteredAdsList = await advertisements
          .filter(filterName)
          .filter(filterTags);
      } catch (error) {
        console.log(error);
      }

      setFilteredAds(filteredAdsList);
    };

    const filterName = (ad) => {
      if (filters.name?.length > 0) {
        const name = filters.name;
        if (name) {
          if (ad.name.toLowerCase().includes(name.toLowerCase())) return true;
        }
        return false;
      }
      return true;
    };

    const filterTags = (ad) => {
      if (filters.tags?.length > 0) {
        const tags = filters.tags;
        tags.map((tag) => {
          if (!ad.tags.includes(tag.toLowerCase())) return true;
          return false;
        });
        if (tags.includes(false)) return false;
      }
      return true;
    };

    getAds();
  }, [advertisements, filters, filteredAds]);

  const sectionClassName = classNames(styles.AdvertsPage, className, {
    [styles.empty]: !advertisements.length,
  });

  return (
    <Page subTitle={subTitle}>
      <FiltersAdsElement
        selectOptions={options}
        filters={filters}
        onFiltering={handleFilters}
      />
      <section className={sectionClassName}>
        <ul>
          {filteredAds.length ? (
            filteredAds.map((ad) => (
              <Link
                key={ad.id}
                to={`/adverts/${ad.id}`}>
                <li>
                  {ad.name}, {ad.sale ? 'I sell' : 'I buy'}, {ad.price},
                  {ad.tags.join(' - ')}
                </li>
              </Link>
            ))
          ) : (
            <button>Crea tu primer anuncio</button>
          )}
        </ul>
      </section>
    </Page>
  );
};

export default AdvertsPage;
