import client from '../../api/client.js';

const advertisementsUrl = '/v1/adverts';

export const getAdvertisements = () => {
  const url = advertisementsUrl;
  return client.get(url);
};

export const getAdById = (id) => {
  const url = advertisementsUrl + '/' + id;
  return client.get(url);
};

/**
 *
 * @param {FormData} advertisement
 * @returns Object
 */
export const postNewAd = (advertisement) => {
  const url = advertisementsUrl;

  return client.post(url, advertisement);
};
