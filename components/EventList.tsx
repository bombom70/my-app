'use client'

import React, { useEffect, useState } from "react";
import { getAsteroids } from "@/services/index";

const EventList = () => {
  const [asteroids, setAsteroids] = useState<any>({});

  useEffect(() => {
    getAsteroids().then(({ near_earth_objects }) => setAsteroids(near_earth_objects));
  }, []);

  return (
    <>
      {Object.keys(asteroids) && Object.keys(asteroids).map(key => {
        return (
          <div key={key}>
            {JSON.stringify(asteroids[key].length)}
          </div>
        )
      })}
    </>
  )
}

export default EventList;