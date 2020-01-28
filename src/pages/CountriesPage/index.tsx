import { Container, Typography } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { fetchCountriesList } from "../../api";
import { CountriesTable } from "../../components/CountriesTable";
import { GoToMain } from "../../components/GoToMain";
import { Country } from "../../types/country";

const CountriesPage: React.FC = () => {
  const { search } = useLocation<string>();
  const [сountries, setCountries] = useState<Country[]>([]);
  const [error, setErrorResponse] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(search) as URLSearchParams;
    const region = params.get("region") as string;

    async function fetchCountries(): Promise<void> {
      try {
        const result = await fetchCountriesList(region);
        setCountries(result);
      } catch (error) {
        setErrorResponse(error);
      }
    }

    fetchCountries();
  }, [search, setCountries, setErrorResponse]);

  return (
    <>
      {error && <Alert severity="error">Status error: {error}</Alert>}
      {error ? (
        <GoToMain />
      ) : (
        <Container>
          <Typography variant="h2" component="h2">
            Countries
          </Typography>
          <CountriesTable сountries={сountries} />
        </Container>
      )}
    </>
  );
};

export default CountriesPage;
