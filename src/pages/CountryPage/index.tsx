import {
  CardMedia,
  Container,
  List,
  ListItem,
  Typography
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { fetchCountryInfo } from "../../api";
import { Country } from "../../types/country";

const CountryPage: React.FC = () => {
  const { search } = useLocation<string>();
  const [сountry, setCountry] = useState<Country | null>(null);
  const [error, setErrorResponse] = useState<string | null>(null);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const params = new URLSearchParams(search) as URLSearchParams;
    const countryName = params.get("name") as string;

    async function fetchCountry(): Promise<void> {
      const result = await fetchCountryInfo(countryName);

      setCountry(result.data);
      setErrorResponse(result.error);
    }

    fetchCountry();
  }, [search]);
  /* eslint-enable react-hooks/exhaustive-deps */

  return (
    <>
      {error ? <Alert severity="error">Status error: {error}</Alert> : null}
      {error ? (
        <Container maxWidth="sm">
          <Typography variant="h3" component="h3">
            <Link to="/">Go to the main page</Link>
          </Typography>
        </Container>
      ) : (
        <Container maxWidth="sm">
          <Typography variant="h3" component="h3">
            {сountry && сountry.name}
          </Typography>
          <CardMedia
            component="img"
            height="140"
            image={(сountry && сountry.flag) || undefined}
            title="Flag"
          />
          <Typography variant="h6" component="h6">
            Top level domain: {сountry && сountry.topLevelDomain[0]}
          </Typography>
          <Typography variant="h6" component="h6">
            ISO 3166-1 alpha-2: {сountry && сountry.alpha2Code}
          </Typography>
          <Typography variant="h6" component="h6">
            ISO 3166-1 alpha-3: {сountry && сountry.alpha3Code}
          </Typography>
          <Typography variant="h6" component="h6">
            Capital: {сountry && сountry.capital}
          </Typography>
          <Typography variant="h6" component="h6">
            Region: {сountry && сountry.region}
          </Typography>
          <Typography variant="h6" component="h6">
            Subregion: {сountry && сountry.subregion}
          </Typography>
          <Typography variant="h6" component="h6">
            Population: {сountry && сountry.population}
          </Typography>
          <Typography variant="h6" component="h6">
            Demonym: {сountry && сountry.demonym}
          </Typography>
          <Typography variant="h6" component="h6">
            Native name: {сountry && сountry.nativeName}
          </Typography>
          <Typography variant="h6" component="h6">
            Numeric code: {сountry && сountry.numericCode}
          </Typography>
          <Typography variant="h6" component="h6">
            Area: {сountry && сountry.area}
          </Typography>
          <Typography variant="h6" component="h6">
            Coordinates: {сountry && сountry.latlng[0]},{" "}
            {сountry && сountry.latlng[1]}
          </Typography>
          <Typography variant="h6" component="h6">
            Gini coefficient: {сountry && сountry.gini}
          </Typography>
          <Typography variant="h6" component="h6">
            Cioc: {сountry && сountry.cioc}
          </Typography>

          <Typography variant="h5" component="h5">
            Currencies:
          </Typography>
          <List>
            {сountry &&
              сountry.currencies.map(currency => (
                <ListItem key={currency.code}>
                  {currency.code}, {currency.name} {currency.symbol}
                </ListItem>
              ))}
          </List>

          <Typography variant="h5" component="h5">
            Timezones:
          </Typography>
          <List>
            {сountry &&
              сountry.timezones.map(timezone => (
                <ListItem key={timezone}>{timezone}</ListItem>
              ))}
          </List>

          <Typography variant="h5" component="h5">
            Borders:
          </Typography>
          <List>
            {сountry &&
              сountry.borders.map(border => (
                <ListItem key={border}>{border}</ListItem>
              ))}
          </List>

          <Typography variant="h5" component="h5">
            Calling Codes:
          </Typography>
          <List>
            {сountry &&
              сountry.callingCodes.map(code => (
                <ListItem key={code}> +{code}</ListItem>
              ))}
          </List>

          <Typography variant="h5" component="h5">
            Alternative spelling:
          </Typography>
          <List>
            {сountry &&
              сountry.altSpellings.map(spelling => (
                <ListItem key={spelling}>{spelling}</ListItem>
              ))}
          </List>

          <Typography variant="h5" component="h5">
            Languages:
          </Typography>
          <List>
            {сountry &&
              сountry.languages.map(language => (
                <ListItem key={language.name}>
                  <List>
                    <ListItem>ISO639_1: {language.iso639_1}</ListItem>
                    <ListItem>ISO639_2: {language.iso639_2}</ListItem>
                    <ListItem>Name: {language.name}</ListItem>
                    <ListItem>Native name: {language.nativeName}</ListItem>
                  </List>
                </ListItem>
              ))}
          </List>

          <Typography variant="h5" component="h5">
            Translations:
          </Typography>
          <List>
            {сountry &&
              Object.keys(сountry.translations)
                .filter(key => сountry && сountry.translations[key])
                .map(key => (
                  <ListItem key={key}>
                    {key.toUpperCase()}: {сountry && сountry.translations[key]}
                  </ListItem>
                ))}
          </List>

          <Typography variant="h5" component="h5">
            Regional blocs:
          </Typography>
          <List>
            {сountry &&
              сountry.regionalBlocs.map(block => (
                <ListItem key={block.name}>
                  <List>
                    <ListItem>Acronym: {block.acronym}</ListItem>
                    <ListItem>Name: {block.name}</ListItem>
                    <ListItem>
                      Other acronyms:
                      {block.otherAcronyms.length > 0
                        ? block.otherAcronyms.join(", ")
                        : "-"}
                    </ListItem>
                    <ListItem>
                      Other names:
                      {block.otherNames.length > 0
                        ? block.otherNames.join(", ")
                        : "-"}
                    </ListItem>
                  </List>
                </ListItem>
              ))}
          </List>
        </Container>
      )}
    </>
  );
};

export default CountryPage;
