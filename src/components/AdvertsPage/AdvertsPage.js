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
  filterNameFunction,
  filterTagsFunction,
  filterSellFunction,
  filterPriceFunction,
  calculateSliderRange,
} from './filtersConf';
import { Button } from '../common/Button';

/**
 * Advertisement component.
 * Recives the title and subTitle of the page.
 * Recives if the user is logged.
 * Recives a function to manage the onLogout event
 * @param {title:string, subTitle:string, className:string} param0
 * @returns React.Component
 */
const AdvertsPage = ({ title, subTitle, className }) => {
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

  const filterAds = () => {
    return advertisements
      .filter((ad) => filterNameFunction(ad, filters))
      .filter((ad) => filterTagsFunction(ad, filters))
      .filter((ad) => filterSellFunction(ad, filters))
      .filter((ad) => filterPriceFunction(ad, filters));
  };
  const filteredAds = filterAds(advertisements);

  const sliderChangeHandle = (event) => {
    setFilters({ ...filters, price: event });
  };

  const redirectNewAd = () => {
    Navigate('new');
  };

  const rangeOfSlider = calculateSliderRange(advertisements);

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
                to={`/adverts/${ad.id}`}
              >
                <li>
                  {ad.name}, {ad.sale ? 'I sell' : 'I buy'}, {ad.price},
                  {ad.tags.join(' - ')}
                </li>
              </Link>
            ))
          ) : (
            <Button onClick={redirectNewAd}>Crea tu primer anuncio</Button>
          )}
        </ul>
      </section>
    </Page>
  );
};

export default AdvertsPage;
