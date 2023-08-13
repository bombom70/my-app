const API_KEY = 'Hmue4i6cIJncAJG9hoJnygi9TSrScOTuHmSkEXCk';

export const getAsteroids = async () => {
  const res = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?api_key=${API_KEY}`).then(res => res.json());

  return res;
}