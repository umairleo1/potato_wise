import client from '../client';
import {API_URLS} from '../url-paths';

const getPrediction = image => {
  return client.post(API_URLS.PREDICT, image);
};

export const predictService = {getPrediction};
