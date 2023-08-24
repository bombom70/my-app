export interface AsteroidData {
  links: Links,
  near_earth_objects: { [key: string]: Asteroid[] },
}

export interface Asteroid {
  id: string,
  name: string,
  nasa_jpl_url: string,
  estimated_diameter: EstimatedDiameter,
  is_potentially_hazardous_asteroid: boolean,
  close_approach_data: []
}

interface EstimatedDiameter {
  kilometers: Feet;
  meters:     Feet;
  miles:      Feet;
  feet:       Feet;
}

interface Feet {
  estimated_diameter_min: number;
  estimated_diameter_max: number;
}

interface Links {
  next: string;
}