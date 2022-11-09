import { useEffect, useState } from 'react';
import { getAdvertisements } from './service';
import classNames from 'classnames';
import styles from './AdvertsPage.module.css';
import { Link, useNavigate } from 'react-router-dom';
import Page from '../Layout/Page';
import FiltersAdsElement from './FiltersAdsElement';
import { useOptions } from './optionsContex';
import {
  enterFilterConfObject,
  selectFilterConfObject,
  radioFilterConfObject,
  sliderFilterConfObject,
} from './filtersConf';

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

  const Navigate = useNavigate();

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

  const filterNameFunction = (ad) => {
    if (filters.name?.length > 0) {
      const name = filters.name;
      if (name) {
        if (ad.name.toLowerCase().includes(name.toLowerCase())) return true;
      }
      return false;
    }
    return true;
  };

  const filterTagsFunction = (ad) => {
    if (filters.tags?.length > 0) {
      for (let index = 0; index < filters.tags.length; index++) {
        if (!ad.tags.includes(filters.tags[index].toLowerCase())) return false;
      }
    }
    return true;
  };

  const filterSellFunction = (ad) => {
    if (filters.sellFilter !== '') {
      if (filters.sellFilter === 'sell') {
        return ad.sale;
      }
      return !ad.sale;
    }

    return true;
  };

  const filterPriceFunction = (ad) => {
    if (filters.price) {
      if (ad.price >= filters.price[0] && ad.price <= filters.price[1])
        return true;
      return false;
    }
    return true;
  };

  const filterAds = () => {
    return advertisements
      .filter(filterNameFunction)
      .filter(filterTagsFunction)
      .filter(filterSellFunction)
      .filter(filterPriceFunction);
  };
  const filteredAds = filterAds(advertisements);

  const calculateRange = (adsList) => {
    let min, max;
    let marks = {};
    adsList.forEach((element) => {
      if (!min) {
        min = max = element.price;
      } else {
        element.price < min ? (min = element.price) : (min = min);
        element.price > max ? (max = element.price) : (max = max);
      }
      marks = { ...marks, [element.price]: element.price };
    });
    return { range: [min, max], marks };
  };

  const sliderChangeHandle = (event) => {
    setFilters({ ...filters, price: event });
  };

  const redirectNewAd = () => {
    Navigate('new');
  };

  const rangeOfSlider = calculateRange(advertisements);

  const enterElementHandleChange = (event) => {
    if (event.target.name === 'name' || event.target.name === 'sellFilter') {
      setFilters({ ...filters, [event.target.name]: event.target.value });
    }

    if (event.target.name === 'tags') {
      const { selectedOptions } = event.target;
      const newTags = [...selectedOptions].map((value) => value.value);
      setFilters({ ...filters, [event.target.name]: newTags });
    }
    if (event.target.name === 'reset') {
      setFilters({ ...filters, tags: [] });
    }
  };

  return (
    <Page subTitle={subTitle}>
      {advertisements.length > 0 && (
        <FiltersAdsElement
          enterElementHandleChange={enterElementHandleChange}
          enterConfig={{ ...enterFilterConfObject, value: filters.name }}
          selectConfig={{
            ...selectFilterConfObject,
            options: tagOptions,
            value: filters.tags,
          }}
          radioConfig={{ ...radioFilterConfObject, value: filters.sellFilter }}
          sliderConfig={{
            ...sliderFilterConfObject,
            sliderRange: rangeOfSlider,
            defaultValue: filters.price,
            value: filters.price,
          }}
          sliderChangeHandle={sliderChangeHandle}
        />
      )}
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
            <button onClick={redirectNewAd}>Crea tu primer anuncio</button>
          )}
        </ul>
      </section>
    </Page>
  );
};

export default AdvertsPage;
