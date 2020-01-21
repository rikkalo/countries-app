import React, { useState, useEffect } from 'react';
import {
  Link,
  useLocation
} from "react-router-dom";

import { fetchCountriesList }  from '../../api';
import { Country } from '../../types/country';

import styles from './style.module.css';

const CountriesPage: React.FC = () => {
  const { search } = useLocation();
  const [ сountries, setCountries ] = useState<Country[]>([]);

  useEffect(() => {
    const params = new URLSearchParams(search);
    const region = params.get('region') as string;

    async function fetchCountries() {
      const result = await fetchCountriesList(region);
      setCountries(result);
    }

    fetchCountries();
  }, [search]); 

  return (
    <ul>
    {сountries.map( country=> (
      <li><Link to={`/сountry?name=${country.name}`}>{country.name}</Link></li>
    ))}
  </ul>
  );
}
export default CountriesPage;
