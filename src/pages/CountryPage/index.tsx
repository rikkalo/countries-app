import React, { useState, useEffect } from 'react';
import {
  useLocation
} from "react-router-dom";

import { fetchCountryInfo }  from '../../api';
import { Country } from '../../types/country';

const CountryPage: React.FC = () => {
  const { search } = useLocation();
  const [ сountry, setCountry ] = useState<Country | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(search);
    const countryName = params.get('name') as string;

    async function fetchCountry() {
      const result = await fetchCountryInfo(countryName);
      setCountry(result);
    }

    fetchCountry();
  }, [search]); 

  return (
    <>{сountry && сountry.name}</>
  );
}

export default CountryPage;
