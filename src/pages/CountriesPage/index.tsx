import {
  Container,
  Link,
  List,
  ListItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Typography
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";

import { fetchCountriesList } from "../../api";
import { Country } from "../../types/country";

const CountriesPage: React.FC = () => {
  const { search } = useLocation<string>();
  const [сountries, setCountries] = useState<Country[]>([]);
  const [error, setErrorResponse] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(search) as URLSearchParams;
    const region = params.get("region") as string;

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
      {error ? (
        <Container maxWidth="sm">
          <Typography variant="h3" component="h3">
            <RouterLink to="/">Go to the main page</RouterLink>
          </Typography>
        </Container>
      ) : (
        <Container maxWidth="sm">
          <Typography variant="h2" component="h2">
            Countries
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableSortLabel>Name</TableSortLabel>
                  <TableSortLabel>Population</TableSortLabel>
                </TableRow>
              </TableHead>
              <TableBody>
                {сountries.map(country => (
                  <TableRow key={country.name}>
                    <TableCell component="th" scope="row">
                      <Link
                        component={RouterLink}
                        to={`/сountry?name=${country.name}`}
                      >
                        {country.name}
                      </Link>
                    </TableCell>
                    <TableCell align="right">{country.population}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      )}
    </>
  );
};

export default CountriesPage;
