'use strict';
import client from '../../api/client.js';

const advertisementsUrl = '/v1/adverts';
export const getAdvertisements = () => {
  const url = advertisementsUrl;
  return client.get(url);
};
