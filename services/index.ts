import moment from 'moment';
import { AsteroidData } from '@/models/models';

const API_KEY = 'Hmue4i6cIJncAJG9hoJnygi9TSrScOTuHmSkEXCk';

export const getAsteroids = async (): Promise<AsteroidData> => {
  const startDay = moment().format('YYYY-MM-DD');
  const endDay = moment().add(1, 'days').format('YYYY-MM-DD');
  
  const res = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDay}&end_date=${endDay}&api_key=${API_KEY}`);

  if (!res.ok) {
    throw new Error("Failed to fetch asteroids data");
  }

  const data = await res.json();

  return data;
}