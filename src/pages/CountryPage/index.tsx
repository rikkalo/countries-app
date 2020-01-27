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
      const result = await fetchCountryInfo(countryName || "");

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
        <GoToMain />
      ) : (
        <Container>
          {сountry && <CountryCommonInfo сountry={сountry} />}

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

          <ListWithTitle title="Regional blocs">
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
          </ListWithTitle>
        </Container>
      )}
    </>
  );
};

export default CountryPage;
