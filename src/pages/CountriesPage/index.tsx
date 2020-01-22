import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Typography, Container, List, ListItem, Link } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import { fetchCountriesList }  from '../../api';
import { Country } from '../../types/country';

const CountriesPage: React.FC = () => {
  const { search } = useLocation<string>();
  const [ сountries, setCountries ] = useState<Country[]>([]);
  const [ error, setErrorResponse ] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(search) as URLSearchParams;
    const region = params.get('region') as string;

    async function fetchCountries(): Promise<void> {
      const result = await fetchCountriesList(region);
      setCountries(result.data);
      setErrorResponse(result.error);
    }

    fetchCountries();
  }, [search]); 

  return (
    <>
    {error ? <Alert severity="error">Status error: {error}</Alert> : null}
    {error? 'вернитесь на главную' :
    <Container maxWidth="sm">
      <Typography variant="h2" component="h2">Countries</Typography>
      <List>
      {сountries.map( country=> (
        <ListItem key={country.name}>
          <Link component={RouterLink} to={`/сountry?name=${country.name}`}>{country.name}</Link>
        </ListItem>
      ))}
    </List>
  </Container>}
  </>
  );
}

export default CountriesPage;
