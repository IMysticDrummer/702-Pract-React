import { useEffect, useState } from 'react';
import { getAdvertisements } from './service';
import classNames from 'classnames';
import styles from './AdvertsPage.module.css';
import { Link } from 'react-router-dom';
import Page from '../Layout/Page';
import FiltersAdsElement from './FiltersAdsElement';
import { useOptions } from './optionsContex';

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
  const [filters, setFilters] = useState({ sellFilter: '', tags: [] });

  const { tagOptions } = useOptions();

  const handleFilters = (filtersSelected) => {
    setFilters(filtersSelected);
  };

  useEffect(() => {
    const getAds = async () => {
      let adsList;
      try {
        adsList = await getAdvertisements();
        setAdvertisements(adsList);
      } catch (error) {
        console.log('fallo AdvertsPage useEffect');
      }
    };
    getAds();
  }, []);

  const sectionClassName = classNames(styles.AdvertsPage, className, {
    [styles.empty]: !advertisements.length,
  });

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
      for (let index = 0; index < filters.tags.length; index++) {
        if (!ad.tags.includes(filters.tags[index].toLowerCase())) return false;
      }
    }
    return true;
  };

  const filterSell = (ad) => {
    if (filters.sellFilter !== '') {
      if (filters.sellFilter === 'sell') {
        return ad.sale;
      }
      return !ad.sale;
    }

    return true;
  };

  const filterAds = () => {
    return advertisements
      .filter(filterName)
      .filter(filterTags)
      .filter(filterSell);
  };
  const filteredAds = filterAds(advertisements);

  return (
    <Page subTitle={subTitle}>
      <FiltersAdsElement
        selectOptions={tagOptions}
        filters={filters}
        onFiltering={handleFilters}
      />
      <section className={sectionClassName}>
        <ul>
          {filteredAds.length ? (
            filteredAds.map((ad) => (
              <Link
                key={ad.id}
                to={`/adverts/${ad.id}`}
              >
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
