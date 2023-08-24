import React from "react";
import { getAsteroids } from '@/services';
import { Asteroid } from '@/models/models';
import moment from 'moment';
import 'moment/locale/ru';

const AsteroidList = async () => {
  const { near_earth_objects } = await getAsteroids();
  const renderAsteroid = (asteroids: Asteroid[]) => {
    return (
      <div>
        {asteroids.map(asteroid => {
          return (
            <div key={asteroid.id}>{asteroid.name}</div>
          )
        })}
      </div>
    )
  }
  return (
    <div>
      <h2>Ближайшие подлёты астероидов</h2>
      <nav>
        <a>в километрах</a> | 
        <a>в лунных орбитах</a>
      </nav>
      {Object.entries(near_earth_objects).map(([date, asteroids]) =>  {
        return (
          <div key={date} style={{border: '1px solid green'}}>
            <h3>{moment(date).format('D MMM Y')}</h3>
            <div>
              {asteroids.map(asteroid => {
                return (
                  <div key={asteroid.id}>{asteroid.name}</div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default AsteroidList;
