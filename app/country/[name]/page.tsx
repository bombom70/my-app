import React from 'react'

interface CountryP {
  params: {
    name: string
  },
}

interface CountryPromise {
  name: {
    common: string
  },
  capital: string,
  region: string,
  population: number,
  languages: {
    [key: string]: string
  },
}

async function getCointry(name: string): Promise<CountryPromise> {
  const res = await fetch(`https://restcountries.com/v3.1/name/${name}/?fullText=true`).then(res => res.json());
  return res[0];
}

const Country = async ({ params }: CountryP) => {
  const country = await getCointry(params.name);
  const formatter = Intl.NumberFormat("rus", { notation: "compact" });
  return (
    <div>
      <h2>{country.name.common}</h2>
      <div>
        <p>Столица: {country.capital}</p>
        <p>Регион: {country.region}</p>
        <p>Население: {formatter.format(country.population)}</p>
        {country.languages && <div>Язык: {Object.values(country.languages).map(val => <span key={val}>{val}</span>)}</div>}
      </div>
    </div>
  )
}

export default Country;
