import { Container, List, ListItem } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { fetchCountryInfo } from "../../api";
import { CountryCommonInfo } from "../../components/CountryCommonInfo";
import { GoToMain } from "../../components/GoToMain";
import { ListWithTitle } from "../../components/ListWithTitle";
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
      try {
        const result = await fetchCountryInfo(countryName || "");

        setCountry(result);
      } catch (error) {
        setErrorResponse(error);
      }
    }

    fetchCountry();
  }, [search, setCountry, setErrorResponse]);
  /* eslint-enable react-hooks/exhaustive-deps */

  return (
    <>
      {error && (
        <Alert data-testid="error-message" severity="error">
          Status error: {error}
        </Alert>
      )}
      {error ? (
        <GoToMain testId="go-to-main-page" />
      ) : (
        <Container data-testid="country-info">
          {сountry && <CountryCommonInfo country={сountry} />}

          <ListWithTitle title="Currencies">
            {сountry &&
              сountry.currencies.map(currency => (
                <ListItem key={currency.code}>
                  {currency.code}, {currency.name} {currency.symbol}
                </ListItem>
              ))}
          </ListWithTitle>

          <ListWithTitle title="Timezones">
            {сountry &&
              сountry.timezones.map(timezone => (
                <ListItem key={timezone}>{timezone}</ListItem>
              ))}
          </ListWithTitle>

          <ListWithTitle title="Borders">
            {сountry &&
              сountry.borders.map(border => (
                <ListItem key={border}>{border}</ListItem>
              ))}
          </ListWithTitle>

          <ListWithTitle title="Calling Codes">
            {сountry &&
              сountry.callingCodes.map(code => (
                <ListItem key={code}> +{code}</ListItem>
              ))}
          </ListWithTitle>

          <ListWithTitle title="Alternative spelling">
            {сountry &&
              сountry.altSpellings.map(spelling => (
                <ListItem key={spelling}>{spelling}</ListItem>
              ))}
          </ListWithTitle>

          <ListWithTitle title="Languages">
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
          </ListWithTitle>

          <ListWithTitle title="Translations">
            {сountry &&
              Object.keys(сountry.translations)
                .filter(key => сountry && сountry.translations[key])
                .map(key => (
                  <ListItem key={key}>
                    {key.toUpperCase()}: {сountry && сountry.translations[key]}
                  </ListItem>
                ))}
          </ListWithTitle>

          {сountry && сountry.regionalBlocs.length > 0 && (
            <ListWithTitle title="Regional blocs">
              {сountry.regionalBlocs.map(block => (
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
            </ListWithTitle>
          )}
        </Container>
      )}
    </>
  );
};

export default CountryPage;
